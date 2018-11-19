<template>
  <div class="pertask card mt-2">
    <div class="card-header">
      {{ task.title }}
    </div>
    <div class="card-body">
      <p class="card-text">Point: {{ task.point }}</p>
      <p class="card-text">Assigned To: {{ task.assignedTo }}</p>
    </div>
    <div class="card-footer">
      <b-btn @click="modalTask = !modalTask">Show Detail</b-btn>
    </div>

    <!-- Modal Detail -->
    <div>
      <b-modal v-model="modalTask" :title="title">
        <b-container>
          <b-col>
            <h5>Description:</h5>
            <p>{{task.description}}</p>
          </b-col>
          <b-col>
            <h5>Point:</h5>
            <p>{{task.point}}</p>
          </b-col>
          <b-col>
            <h5>Status:</h5>
            <p>{{task.category}}</p>
          </b-col>
        </b-container>
        <div slot="modal-footer" class="container d-flex justify-content-between" v-if="task.category === 'backlog'">
          <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
          <button class="btn btn-success" @click="updateTask(task, 'todo')">To-Do</button>
        </div>
        <div slot="modal-footer" class="container d-flex justify-content-between" v-if="task.category === 'todo'">
          <button class="btn btn-warning" @click="updateTask(task, 'backlog')">Back-Log</button>
          <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
          <button class="btn btn-success" @click="updateTask(task, 'doing')">Doing</button>
        </div>
        <div slot="modal-footer" class="container d-flex justify-content-between" v-if="task.category === 'doing'">
          <button class="btn btn-warning" @click="updateTask(task, 'todo')">To-Do</button>
          <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
          <button class="btn btn-success" @click="updateTask(task, 'done')">Done</button>
        </div>
        <div slot="modal-footer" class="container d-flex justify-content-between" v-if="task.category === 'done'">
          <button class="btn btn-success" @click="updateTask(task, 'doing')">Doing</button>
          <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
        </div>
      </b-modal>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      modalTask: false,
      title: `${this.task.title} for ${this.task.assignedTo}`
    }
  },
  methods: {
    deleteTask(id) {
      this.$emit('delete-task', id)
      this.modalTask = false
    },
    updateTask(task, status) {
      task.category = status
      this.$emit('update-task', task)
      this.modalTask = false
    }
  }
}
</script>

<style>
@keyframes shadow {
  from { box-shadow: none }
  to { box-shadow: 0px 0px 10px 2px #aaa; }
}
.pertask:hover {
  animation: shadow .2s both;
}
</style>
