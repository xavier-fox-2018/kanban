<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <div>
    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading -->
      <button v-on:click="removeTaskDetail()" class="btn btn-primary" style="margin: 30px;" data-toggle="modal" data-target="#addTaskModal">Add Task</button>

      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <!-- <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a> -->
            <div class="card-header">
              <h4 class="card-title">
                <a href="#">To Do</a>
              </h4>
            </div>
            <div class="card-body">

              <div v-for="(task, index) in todo_list" v-bind:key="index" class="card">
                <div class="card-header">
                  <h5>{{ task.name }}</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: {{task.assigned_to}}</p>
                  <hr>
                    <button v-on:click="addTaskDetail(task)" class="btn btn-primary" data-toggle="modal" data-target="#detailModal">Show Detail</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title">
                <a href="#">In Progress</a>
              </h4>
            </div>
            <div class="card-body">
              
              <div v-for="(task, index) in in_progress_list" v-bind:key="index" class="card">
                <div class="card-header">
                  <h5>{{ task.name }}</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: {{task.assigned_to}}</p>
                  <hr>
                    <button v-on:click="addTaskDetail(task)" class="btn btn-primary" data-toggle="modal" data-target="#detailModal">Show Detail</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title">
                <a href="#">Reviewed</a>
              </h4>
            </div>
            <div class="card-body">
              
              <div v-for="(task, index) in reviewed_list" v-bind:key="index" class="card">
                <div class="card-header">
                  <h5>{{ task.name }}</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: {{task.assigned_to}}</p>
                  <hr>
                    <button v-on:click="addTaskDetail(task)" class="btn btn-primary" data-toggle="modal" data-target="#detailModal">Show Detail</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <div class="card-header">
              <h4 class="card-title">
                <a href="#">Done</a>
              </h4>
            </div>
            <div class="card-body">
              
              <div v-for="(task, index) in done_list" v-bind:key="index" class="card">
                <div class="card-header">
                  <h5>{{ task.name }}</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: {{task.assigned_to}}</p>
                  <hr>
                    <button v-on:click="addTaskDetail(task)" class="btn btn-primary" data-toggle="modal" data-target="#detailModal">Show Detail</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Add TaskModal -->
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addTaskModalLabel">Add Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: left;">
            <label>Task Name:</label>
            <input v-model="task.name" type="text" class="form-control" placeholder="title">
            <br>
            <label>Task Description:</label>
            <input v-model="task.description" type="text" class="form-control" placeholder="description">
            <br>
            <label>Assigned to:</label>
            <input v-model="task.assigned_to" type="text" class="form-control" placeholder="e.g. John">
            <br>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button v-on:click="addTask()" type="button" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Detail Modal -->
    <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailModalLabel">{{ task.name }}'s detail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: left;">
           <label> Description: </label>
           <p>{{task.description}}</p>
           <label> Assigned To: </label>
           <p>{{task.assigned_to}}</p>
          </div>
          <div class="modal-footer justify-content-around">
            <button v-if="task.status !== 'todo'" v-on:click="changeStatus('todo')" type="button" class="btn btn-primary" data-dismiss="modal">To Do</button>
            <button v-if="task.status !== 'in_progress' && task.status !== 'done'" v-on:click="changeStatus('in_progress')" type="button" class="btn btn-info" data-dismiss="modal">In Progress</button>
            <button v-if="task.status !== 'reviewed' && task.status !== 'done'" v-on:click="changeStatus('reviewed')" type="button" class="btn btn-warning" data-dismiss="modal">Reviewed</button>
            <button v-if="task.status !== 'done'" v-on:click="changeStatus('done')" type="button" class="btn btn-success" data-dismiss="modal">Done</button>
            <button v-on:click="removeTask()"  type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
            <!-- <button v-on:click="addTask()" type="button" class="btn btn-primary">Add</button> -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import database from '../assets/config'

export default {
  name: 'home',

  data() {
    return {
      task: {
        name: '',
        description: '',
        assigned_to: '',
        status: ''
      },
      todo_list: [],
      reviewed_list: [],
      in_progress_list: [],
      done_list: []
    }
  },
  created() {
    this.getAllTask()
  },
  methods: {
    addTask() {

      let self = this
      let task = database.ref('tasks/' + self.task.name)

      task.once('value', function (snapshot) {
        let result = snapshot.val()

        if (!result) {
          database
            .ref('tasks/' + self.task.name)
            .set({
              name: self.task.name,
              description: self.task.description,
              assigned_to: self.task.assigned_to,
              status: 'todo'
            })
              .then(response => {
                console.log('ini response', response);
                
              })
        }
      })
    },
    getAllTask() {
      let self = this
      database.ref('tasks/').on('value', function (snapshot) {
          console.log('get all tasks', snapshot.val())
          let result = snapshot.val()

          let data = Object.keys(result)

          self.todo_list = []
          self.reviewed_list = []
          self.in_progress_list = []
          self.done_list = []

          for (let i = 0; i < data.length; i++) {
            if (result[data[i]].status === 'todo') {
              self.todo_list.push(result[data[i]])
              
            } else if (result[data[i]].status === 'in_progress') {
              self.in_progress_list.push(result[data[i]])
              
            } else if (result[data[i]].status === 'reviewed') {
              self.reviewed_list.push(result[data[i]])
              
            } else if (result[data[i]].status === 'done') {
              self.done_list.push(result[data[i]])
              
            }
          }
          
          // self.room_list = Object.keys(result)

          // console.log('ini semua', self.room_list);
          
      })
    },
    addTaskDetail(task) {
      this.task.name = task.name
      this.task.description = task.description
      this.task.assigned_to = task.assigned_to
      this.task.status = task.status
    },
    removeTaskDetail() {
      this.task.name = ''
      this.task.description = ''
      this.task.assigned_to = ''
      this.task.status = ''
    },
    changeStatus(status) {

      let self = this

      database
            .ref('tasks/' + self.task.name)
            .set({
              name: self.task.name,
              description: self.task.description,
              assigned_to: self.task.assigned_to,
              status: status
            })
    },
    removeTask() {
      let self = this

      database
            .ref('tasks/' + self.task.name)
            .set({})
    }
  }
}
</script>
