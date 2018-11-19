<template>
  <div class="kanbanboard container-fluid p-3 bg-light">
    <div class="row">
      <PerBoard 
        :title="'Back-Log'" 
        :list="backLog" 
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <PerBoard 
        :title="'To-Do'" 
        :list="todo"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <PerBoard 
        :title="'Doing'" 
        :list="doing"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <PerBoard 
        :title="'Done'" 
        :list="done"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
    </div>
    <!-- Modal Create Task -->
    <div>
      <b-modal v-model="modalCreate" title="Create New Task">
        <b-container>
          <form @click.prevent class="form-group">
            <label for="title">Title</label>
            <input type="text" v-model="newTask.title" class="form-control">
            <label for="description" >Description</label>
            <textarea name="description" v-model="newTask.description" class="form-control"></textarea>
            <label for="point">Point</label>
            <input type="number" v-model="newTask.point" class="form-control">
            <label for="assignedTo">Assigned To</label>
            <input type="text" v-model="newTask.assignedTo" class="form-control">
          </form>
        </b-container>
        <div slot="modal-footer">
          <button @click="modalCreate = !modalCreate" class="btn btn-danger">Cancel</button>
          <button @click="createTask" class="btn btn-primary ml-3">Create</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import PerBoard from '@/components/PerBoard.vue'

export default {
  data () {
    return {
      newTask: {},
      tasks: [],
      backLog: [],
      todo: [],
      doing: [],
      done: [],
      modalCreate: false
    }
  },
  components: {
    PerBoard
  },
  methods: {
    modalCreateButton () {
      this.modalCreate = true
    },
    createTask () {
      let db = firebase.database().ref('task/')
      db.push({
        title: this.newTask.title || '',
        description: this.newTask.description || '',
        point: this.newTask.point || 0,
        assignedTo: this.newTask.assignedTo || '',
        category: 'backlog'
      })
      this.newTask = {}
      this.modalCreate = false
    },
    deleteTask (id) {
      if (confirm('Are you sure want to delete this task?')) {
        let db = firebase.database().ref('task/').child(id)
        db.remove()
      }
    },
    updateTask (task) {
      let db = firebase.database().ref('task/').child(task.id)
      db.update(task)
    }
  },
  mounted () {
    const config = {
      apiKey: "AIzaSyAgmIxNmZY9porbgJ_M7x2-joS7Gtf_5I0",
      authDomain: "kanvantamvan.firebaseapp.com",
      databaseURL: "https://kanvantamvan.firebaseio.com",
      projectId: "kanvantamvan",
      storageBucket: "kanvantamvan.appspot.com",
      messagingSenderId: "810808610311"
    }

    firebase.initializeApp(config)

    let task = firebase.database().ref('task/')

    task.on('value', snap => {
      this.tasks = snap.val()
      this.backLog = []
      this.todo = []
      this.doing = []
      this.done = []
      for (let i in this.tasks) {
        let obj = {
          id: i, 
          title: this.tasks[i].title,
          description: this.tasks[i].description,
          point: this.tasks[i].point,
          category: this.tasks[i].category,
          assignedTo: this.tasks[i].assignedTo,
        }
        if (this.tasks[i].category === 'backlog') this.backLog.push(obj)
        if (this.tasks[i].category === 'todo') this.todo.push(obj)
        if (this.tasks[i].category === 'doing') this.doing.push(obj)
        if (this.tasks[i].category === 'done') this.done.push(obj)
      }
    })
  }
}
</script>
