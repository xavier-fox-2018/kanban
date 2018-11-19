<template>
  <div class="home mx-4">
    <Header v-on:sendFromHeader="addTask"></Header>
    
    <div class="row">
      <div class="col-3" v-for="board in boards" :key="board.name">
        <Board v-on:changeInfoToHome="info" :title="board.name" :tasks="board.tasks"></Board>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Board from '@/components/Board.vue'
import database from '@/assets/config.js'



export default {
  name: 'home',
  components: { Header, Board },
  data() {
    return {
      boards: [
        {name: 'Back-Log', tasks: []}, 
        {name: 'To-Do', tasks: []}, 
        {name: 'Doing', tasks: []}, 
        {name: 'Done', tasks: []}],
      currentChanging: {}
    }
  },

  methods: {
    info: function(data) {
      console.log('from board', data);
      this.currentChanging = data
      if (this.currentChanging.endStatus == "back-log") {
        this.changetoBacklog()
      }
      else if (this.currentChanging.endStatus == "to-do") {
        this.changetoTodo()
      }
      else if (this.currentChanging.endStatus == "doing") {
        this.changetoDoing()
      }
      else if (this.currentChanging.endStatus == "done") {
        this.changetoDone()
      }
    },

    addTask: function() {
      this.getData()
    },

    changetoBacklog: function() {
      database.ref(`db/tasks/${this.currentChanging.task.id}`).remove()
      database.ref(`db/tasks`).push({
        title: this.currentChanging.task.title,
        description: this.currentChanging.task.description,
        point: this.currentChanging.task.point,
        assignedTo: this.currentChanging.task.assignedTo,
        status: "back-log"
      })
      this.getData()
    },


    changetoTodo: function() {
      database.ref(`db/tasks/${this.currentChanging.task.id}`).remove()
      database.ref(`db/tasks`).push({
        title: this.currentChanging.task.title,
        description: this.currentChanging.task.description,
        point: this.currentChanging.task.point,
        assignedTo: this.currentChanging.task.assignedTo,
        status: "to-do"
      })
      this.getData()
    },

    changetoDoing: function() {
      database.ref(`db/tasks/${this.currentChanging.task.id}`).remove()
      database.ref(`db/tasks`).push({
        title: this.currentChanging.task.title,
        description: this.currentChanging.task.description,
        point: this.currentChanging.task.point,
        assignedTo: this.currentChanging.task.assignedTo,
        status: "doing"
      })
      this.getData()
    },


    changetoDone: function() {
      database.ref(`db/tasks/${this.currentChanging.task.id}`).remove()
      database.ref(`db/tasks`).push({
        title: this.currentChanging.task.title,
        description: this.currentChanging.task.description,
        point: this.currentChanging.task.point,
        assignedTo: this.currentChanging.task.assignedTo,
        status: "done"
      })
      this.getData()
    },


    getData: function() {
      this.boards = [
        {name: 'Back-Log', tasks: []}, 
        {name: 'To-Do', tasks: []}, 
        {name: 'Doing', tasks: []}, 
        {name: 'Done', tasks: []}]

      database.ref('db/tasks').on('value', (snapshot) => {
        let allTasks = Object.entries(snapshot.val())
        allTasks.forEach(task => {
          let eachTask = task[1]
          eachTask['id'] = task[0]
          
          if (eachTask.status == "back-log") {
            this.boards[0].tasks.push(eachTask)
          }
          else if (eachTask.status == "to-do") {
            this.boards[1].tasks.push(eachTask)
          }
          else if (eachTask.status == "doing") {
            this.boards[2].tasks.push(eachTask)
          }
          else if (eachTask.status == "done") {
            this.boards[3].tasks.push(eachTask)
          }
        })
      })
    }
  },

  created() { 
    this.getData()
  },

  watch: {
    boards: function(val) {
      console.log('berubah nih', val);
    }
  }

}
</script>
