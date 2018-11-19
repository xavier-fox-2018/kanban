<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <div>
    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading -->
      <button class="btn btn-primary" style="margin: 30px;" data-toggle="modal" data-target="#addTaskModal">Add Task</button>

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
                    <button class="btn btn-primary">Show Detail</button>
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
                  <h5>Titile</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: Hahah</p>
                  <hr>
                    <button class="btn btn-primary">Show Detail</button>
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
                  <h5>Titile</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: Hahah</p>
                  <hr>
                    <button class="btn btn-primary">Show Detail</button>
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
                  <h5>Titile</h5>
                </div>
                <div class="card-body">
                  <p>Assigned to: Hahah</p>
                  <hr>
                    <button class="btn btn-primary">Show Detail</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Modal -->
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
  }
}
</script>
