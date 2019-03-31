<template>
    <div>
        <div id="nav">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand"> KANBAN </a>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addTask">Add Task</button>
            </nav>
        </div>
        <div class="container-fluid">
            <div class="row">
                <KolomTask v-for="(kolom, index) in kolomTask" :key="index" :kolom="kolom"></KolomTask>
            </div>
        </div>

        <!-- modal add task -->
        <div id="addTask" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Task</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Task Title</label>
                            <input v-model="inputTitle" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Task Title" required>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Point</label>
                            <input v-model="inputPoint" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Point" required>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Assigned To</label>
                            <input v-model="inputAssign" type="text" class="form-control" id="exampleInputPassword1" placeholder="asigned to" required>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Task Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Task Description" v-model="inputDesc" required></textarea>
                            <!-- <input v-model="inputDesc" type="text" class="form-control" id="exampleInputPassword1" placeholder="Task Description" required> -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Add Task</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import KolomTask from '@/components/KolomTask.vue'
    import db from '@/assets/config.js'

export default {
    name: 'Kanban',
    components: {
        KolomTask
    },
    created(){
        this.getAllTask()
    },
    data(){
        return {
            inputTitle: '',
            inputPoint: '',
            inputAssign: '',
            inputDesc: '',
            allTask: [],
            idTask: [],
            kolomTask:
                [{
                    name: 'BackLog',
                    data: [],
                    class1: 'card border-danger mb-3 mx-auto',
                    class2: 'card-header bg-danger text-white font-weight-bold',
                    class3: 'btn-danger'

                },
                {
                    name: 'ToDo',
                    data: [],
                    class1: 'card border-warning mb-3 mx-auto',
                    class2: 'card-header bg-warning text-white font-weight-bold',
                    class3: 'btn-warning'
                },
                {
                    name: 'Doing',
                    data: [],
                    class1: 'card border-primary mb-3 mx-auto',
                    class2: 'card-header bg-primary text-white font-weight-bold',
                    class3: 'btn-primary'
                },
                {
                    name: 'Done',
                    data: [],
                    class1: 'card border-success mb-3 mx-auto',
                    class2: 'card-header bg-success text-white font-weight-bold',
                    class3: 'btn-success'
                }]
        }
    },
    methods: {
        addTask(){
            db.ref('/').push({
                title: this.inputTitle,
                point: this.inputPoint,
                assign: this.inputAssign,
                description: this.inputDesc,
                status: 'BackLog'
            });
            this.inputTitle = ''
            this.inputPoint = ''
            this.inputAssign = ''
            this.inputDesc = ''
            },
        getAllTask(){
            var starCountRef = db.ref('/' );
            starCountRef.on('value', snapshot =>  {
                this.kolomTask[0].data = []
                this.kolomTask[1].data = []
                this.kolomTask[2].data = []
                this.kolomTask[3].data = []
                // console.log(snapshot.val());
                if(snapshot.val()){
                    this.allTask = Object.values(snapshot.val())
                    this.idTask = Object.keys(snapshot.val())
                }
                // console.log(this.allTask);
                for(let i = 0; i < this.allTask.length; i++){
                    this.allTask[i].id = this.idTask[i]
                        if(this.allTask[i].status === 'BackLog'){
                        this.kolomTask[0].data.push(this.allTask[i])
                    } else if (this.allTask[i].status === 'ToDo'){                            
                        this.kolomTask[1].data.push(this.allTask[i])
                    } else if (this.allTask[i].status === 'Doing'){
                        this.kolomTask[2].data.push(this.allTask[i])
                    } else if (this.allTask[i].status === 'Done'){
                        this.kolomTask[3].data.push(this.allTask[i])
                    }
                }
            })
        }
    }
}

</script>

<style>

</style>
