<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
                <a class="navbar-brand" href="#">The Amazing Kanban</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                   
                  </ul>
                  <div class="form-inline my-2 my-lg-0">                    
                    <button class="btn btn-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Create a Task</button>
                  </div>
                </div>
        </div>
    </nav>
    <div class="modal fade" id="exampleModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="createTask">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label" >Title:</label>
            <input type="text" class="form-control" v-model="task.taskName" >
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Description:</label>
            <textarea class="form-control" v-model="task.description" ></textarea>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Point:</label>
            <input type="number" min="0" class="form-control" v-model="task.point" >
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Assigned To:</label>
            <input type="text" class="form-control" v-model="task.assignedTo">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createTask">Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


<script>

import db from '../assets/config.js'

export default {
    data(){
        return {
            task: {
                taskName: '',
                description: '',
                point: '',
                assignedTo: ''
             }
           
        }
    },

    methods: {
        createTask(){
            db.ref('/').push({
                title:this.task.taskName,
                description: this.task.description,
                point: this.task.point,
                assignedTo: this.task.assignedTo,
                status: 'Back-Log'
            })
            this.task = {}
        }
    }
}
</script>

