<template>
  <div class="modal fade" id="exampleModalCreateTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">New Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="exampleInputTitle">Title</label>
              <input type="text" class="form-control" id="exampleInputTitle" placeholder="Task title" v-model="title">
            </div>
            <div class="form-group">
              <label for="exampleInputDescription">Description</label>
              <input type="text" class="form-control" id="exampleInputDescription" placeholder="Task description" v-model="description">
            </div>
            <div class="form-group">
              <label for="exampleInputPoint">Point</label>
              <input type="number" class="form-control" id="exampleInputPoint" v-model="point">
            </div>
            <div class="form-group">
              <label for="exampleInputAssignedTo">Assigned To</label>
              <input type="text" class="form-control" id="exampleInputAssignedTo" placeholder="Assigned To" v-model="assignedTo">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="createTask">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/config.js'
export default {
  name: 'ModalCreateTask',
  data(){
    return {
      title: '',
      description: '',
      point: 0,
      assignedTo: ''
    }
  },
  methods: {
    reassigned(){
      this.title= '',
      this.description= '',
      this.point= 0,
      this.assignedTo= ''
    },
    createTask(){
      const db = firebaseApp.database()
      let self = this
      db.ref('/Tasks').push({
        title : self.title,
        description : self.description,
        point : Number (self.point),
        assignedTo : self.assignedTo,
        status : 'Back-Log'
      });
      this.reassigned();
    }
  }
}
</script>

<style>

</style>
