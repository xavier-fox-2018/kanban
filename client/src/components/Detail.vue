<template>
  <div class="container">
    <h1>{{task.title}}</h1>
    <hr>
    <h2>Description : {{task.description}}</h2>
    <h4>Point : {{task.point}}</h4>
    <h4>Status : {{task.status}}</h4>
    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-outline-primary" v-if="task.status !== 'Back-Log'" @click="moveToPrev">
            Move to {{prevStatus}}
        </button>
      </div>
      <div class="col-md-4">
          <button class="btn btn-outline-danger" @click="removeTask">
            Remove
          </button>
      </div>
      <div class="col-md-4">
        <button class="btn btn-outline-primary" v-if="task.status !== 'Done'" @click="moveToNext">
          Move to {{nextStatus}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/config.js'
import detail from '@/components/Detail.vue'
export default {
  name:'detail',
  props: ['task'],
  data(){
    return {
      prevStatus: '',
      nextStatus: ''
    }
  },
  mounted(){
    console.log(this.msg)
    if (this.task.status === 'Back-Log') {
        this.nextStatus = 'To-Do';
    } else if (this.task.status === 'To-Do') {
        this.prevStatus = 'Back-Log';
        this.nextStatus = 'Doing';
    } else if (this.task.status === 'Doing') {
        this.prevStatus = 'To-Do';
        this.nextStatus = 'Done';
    } else if (this.task.status === 'Done'){
        this.prevStatus = 'Doing';
    }
  },
  methods:{
    moveToPrev() {
        let db = firebaseApp.database()
        let movedTask = this.task;
        console.log(this.prevStatus)
        db.ref(`/Tasks`).push({
            title: movedTask.title,
            description: movedTask.description,
            point: movedTask.point,
            assignedTo: movedTask.assignedTo,
            status: this.prevStatus
        });
        this.removeTask();
        this.$router.push('/')
    },

    moveToNext() {
        let db = firebaseApp.database()
        let movedTask = this.task;
        console.log(this.nextStatus)
        db.ref(`/Tasks`).push({
            title: movedTask.title,
            description: movedTask.description,
            point: movedTask.point,
            assignedTo: movedTask.assignedTo,
            status: this.nextStatus
        });
        this.removeTask();
        this.$router.push('/')
    },

    removeTask() {
        let db = firebaseApp.database()
        db.ref(`/Tasks/${this.task.id}`).remove();
        this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
