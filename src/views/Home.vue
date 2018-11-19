<template>
  <div class="home">
    <nav-header/>
    <div class="container is-fluid kanban">
    <div class="columns is-desktop">
      <kanban v-for="(data,index) in listed" :key="index" :data="data"></kanban>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import database from '../assets/config.js'
import NavHeader from '@/components/Header.vue'
import kanban from '@/components/kanbanCard.vue'

const taskData = [
  {
    name: 'Back-Log',
    data: [],
    color: "has-background-link",
  },
  {
    name: 'To-Do',
    data: [],
    color: "has-background-warning",
  },
  {
    name: 'Doing',
    data: [],
    color: "has-background-primary",
  },
  {
    name: 'Done',
    data: [],
    color: "has-background-success",
  }
]

var task = database.ref('/')
task.on('value', function (data) {
  console.log(data.val());
  taskData[0].data = []
  taskData[1].data = []
  taskData[2].data = []
  taskData[3].data = []
  data.forEach(function (childTask) {
    console.log(childTask.val());
    
    if (childTask.val().status === 'Back-Log') {
      const obj = childTask.val()
      obj.id = childTask.key
      taskData[0].data.push(obj)
    } else if (childTask.val().status === 'To-Do') {
      const obj = childTask.val()
      obj.id = childTask.key
      taskData[1].data.push(obj)
    } else if (childTask.val().status === 'Doing') {
      const obj = childTask.val()
      obj.id = childTask.key
      taskData[2].data.push(obj)
    } else {
      const obj = childTask.val()
      obj.id = childTask.key
      taskData[3].data.push(obj)
    }
  })
})

export default {
  name: 'home',
  components: {
    NavHeader, kanban
  },
  data(){
    return{
      listed: taskData,
    }
  },
}
</script>
