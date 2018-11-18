<template>
    <div class="mt-5">
        <h1 class="display-4 mb-4" id="kanban-title">Kanban L<i class="fas fa-thermometer-half"></i>te</h1>
        <div class="d-flex justify-content-start">
            <button class="btn btn-dark font-weight-bold mb-4" id="btn-newTask" data-toggle="modal" data-target="#inputModal">New Task</button>
        </div>

        <div class="modal fade" id="inputModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">New Task</h5>
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group d-flex flex-column">
                                <label for="title" class="text-left">Title</label>
                                <input type="text" placeholder="Task Title" class="form-control" v-model="task.taskName">
                            </div>
                            <div class="form-group d-flex flex-column">
                                <label for="description" class="text-left">Description</label>
                                <textarea class="form-control" id="message" rows="3" placeholder="Task Brief Explanation" v-model="task.description"></textarea>
                            </div>
                            <div class="form-group d-flex flex-column">
                                <label for="point" class="text-left">Point</label>
                                <input type="number" placeholder="0" class="form-control" v-model="task.point">
                            </div>
                            <div class="form-group d-flex flex-column">
                                <label for="assigned-to" class="text-left">Assigned To</label>
                                <input type="text" placeholder="Person Name" class="form-control" v-model="task.assigned_to">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer ">
                        <button class="btn btn-danger font-weight-bold" data-dismiss="modal">Cancel</button>
                        <button class="btn btn-primary font-weight-bold ml-1" data-dismiss="modal" @click="createTask">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import database from '../assets/config.js';

export default {
    name: 'header',
    data() {
        return {
            task: {
                taskName: '',
                description: '',
                point: '',
                assigned_to: ''
            }
        }
    }, 
    methods: {
        createTask: function() {
            database.ref('kanban').push({
                status: 'Back-Log',
                title: this.task.taskName,
                description: this.task.description,
                point: this.task.point,
                assigned_to: this.task.assigned_to
            });

            this.task = {};
        }
    }
}
</script>

<style scoped>
#kanban-title {
  font-family: 'Roboto Slab', serif !important;
}

#btn-newTask {
  border: none !important;
  border-color: #cccccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
