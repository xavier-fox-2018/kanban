<template>
     <div class="card mb-3 text-secondary" style="max-width: 18rem;">
<!-- <div class="card-header bg-info text-white">Title</div> -->
         <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p> {{ task.description }}</p>
            <div class="card-text">
                <span>Point : {{ task.point }}</span><br>
                <span class="mt-1">Assigned To : {{ task.assignedTo }} </span>
                 <div class="mt-2">
                    <button class="btn btn-primary btn-sm" data-toggle="modal" :data-target="'#'+ task.id">Options</button>
                </div>
            </div>
         </div>
         <!-- Modal -->
<div class="modal fade" :id="task.id" tabindex="-1">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Action</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Options
      </div>
      <div>
        <button type="button" class="btn btn-danger ml-5 mb-3 center" data-dismiss="modal" @click="deleteTask">Delete</button>
        <button type="button" class="btn btn-primary ml-4 mb-3" data-dismiss="modal" v-if="label2" @click="down">Move to {{ label2 }}</button>
        <button type="button" class="btn btn-info ml-4 mb-3" data-dismiss="modal" v-if="label1" @click="up">Move to {{ label1 }}</button>
      </div>
    </div>
  </div>
</div>
     </div>
     
</template>

<script>

import db from '../assets/config.js'
export default {
    props: ['task', 'name'],
    data(){
        return {
            label1: '',
            label2: ''
        }        
    },
    methods: {
        up(){
            db.ref('/' + this.task.id).update({
                title: this.task.title,
                description: this.task.description,
                point: this.task.point,
                assignedTo: this.task.assignedTo,
                status: this.label1
            })
        },
        down(){
             db.ref('/' + this.task.id).update({
                title: this.task.title,
                description: this.task.description,
                point: this.task.point,
                assignedTo: this.task.assignedTo,
                status: this.label2
            })
        },
        deleteTask(){
             db.ref(`/${this.task.id}`).remove()
        }
    },
    created () {
    if (this.name === 'Back-Log') {
      this.label1 = 'To-Do'
      this.label2 = null
    } else if (this.name === 'To-Do') {
      this.label1 = 'Doing'
      this.label2 = 'Back-Log'
    } else if (this.name === 'Doing') {
      this.label1 = 'Done'
      this.label2 = 'To-Do'
    } else {
      this.label1 = null
      this.label2 = 'Doing'
    }
  }
}
</script>

