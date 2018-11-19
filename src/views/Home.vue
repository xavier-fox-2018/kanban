<template>
<div>
   <Menu></Menu>
  <div class="container2 mt-5">       
        <div class="row">
            <Container v-for="data in taskLists" :key="data.id" :data="data"></Container>
            <!-- <h1>haha</h1> -->
        </div>
  </div>
</div>
</template>

<script>

import db from '../assets/config.js'

const taskData = [
  {
    name: 'Back-Log',
    style: 'danger',
    data: []
  },
  {
    name: 'To-Do',
     style: 'info',
    data: []
  },
  {
    name: 'Doing',
    style: 'primary',
    data: []
  },
  {
    name: 'Done',
    style: 'success',
    data: []
  }
]

  db.ref('/').on('value', snapshot => {
  taskData[0].data = []
  taskData[1].data = []
  taskData[2].data = []
  taskData[3].data = []

  snapshot.forEach(task => {
    if (task.val().status === 'Back-Log') {
      const obj = task.val()
      obj.id = task.key
      taskData[0].data.push(obj)
    } else if (task.val().status === 'To-Do') {
      const obj = task.val()
      obj.id = task.key
      taskData[1].data.push(obj)
    } else if (task.val().status === 'Doing') {
      const obj = task.val()
      obj.id = task.key
      taskData[2].data.push(obj)
    } else {
      const obj = task.val()
      obj.id = task.key
      taskData[3].data.push(obj)
    }
  })
})



export default {
    data(){
      return {
         taskLists: taskData
      }
    },
    components: {
      Container: () => import('@/components/CardContainer'),
      Menu: () => import('@/components/Form'),
    },
    
    created(){
      console.log(this.taskLists, '===tlist==')
    }
}
</script>

