<template>
  <v-container grid-list-md>
    <navbar class="judul"/>
    <add-task v-on:addThis="addData($event)"/>
    <v-layout col wrap>
    <cards :description='colourAndName[0]' :data='isi.backLog' v-on:updateThis='updateStatus($event)' v-on:deleteThis='deleteData($event)'/>
    <cards :description='colourAndName[1]' :data='isi.todo' v-on:updateThis='updateStatus($event)' v-on:deleteThis='deleteData($event)'/>
    <cards :description='colourAndName[2]' :data='isi.doing' v-on:updateThis='updateStatus($event)' v-on:deleteThis='deleteData($event)'/>
    <cards :description='colourAndName[3]' :data='isi.done' v-on:updateThis='updateStatus($event)' v-on:deleteThis='deleteData($event)'/>
    <!-- <button @click="addData()">add</button> -->
    </v-layout>
  </v-container>
  
</template>

<script>
  import navbar from '../components/navbar.vue'
  import cards from '@/components/card.vue'
  import db from '@/assets/config.js'
  import addTask from '@/components/addTask.vue'
  // const task = db.ref('/')

      // read data firebase

  // task.on('value', function(data){
  //   console.log(data.val())

  // })

    // import data to firebase

  // task.push({
  //   title: 'back-log',
  //   status: 'on'
  // })
  // db.ref('/back-log').push({
  //   title: 'membuat website',
  //   description: 'membuat website dengan menggunakan database firebase'

  // })
var kanbanData= {
  backLog: [],
  todo: [],
  doing: [],
  done: []

}

  export default {
    data(){
      return{
        isi: kanbanData,
        colourAndName: [{
          name: 'Back Log',
          color: 'orange'
        },
        {
          name: 'Todo',
          color: 'green'
        },
        {
          name: 'Doing',
          color: 'blue'
        },
        {
          name: 'Done',
          color: 'yellow'
        }]
      }
    },
    components: {
      navbar,
      cards,
      addTask
    },
    mounted() {
      this.getData()
    },
    methods:{
      getData(){
        
        db.ref(`/`).on('value', function (data) {
          console.log(data.val())
              kanbanData.backLog = []
              kanbanData.todo = []
              kanbanData.doing = []
              kanbanData.done = []
            for(let key in data.val()){
              if(data.val()[key].status === 'Back-log'){
                kanbanData.backLog.push({key: key,data:data.val()[key]})           
              } else if(data.val()[key].status === 'Todo'){
                console.log('ini todo');
                kanbanData.todo.push({key: key,data:data.val()[key]})           
              } else if(data.val()[key].status === 'Doing'){
                kanbanData.doing.push({key: key,data:data.val()[key]})           
              } else if(data.val()[key].status === 'Done'){
                kanbanData.done.push({key: key,data:data.val()[key]})           
              }
            }
          console.log('ini===',kanbanData);
          
          
        })
      },
      addData(data){
        db.ref('/').push({
          status: 'Back-log',
          title: data.title,
          description: data.description
        })
        console.log(kanbanData);
        
        // this.isi = []
        // this.getData()
      },
      updateStatus(data){
        db.ref(`/${data.data.key}`).update({
          status: data.status,
          title: data.data.data.title,
          description: data.data.data.description
        })
        // this.isi = []
        console.log('ini=====',kanbanData);
        this.getData()
        console.log('after=====',kanbanData);
        
      },
      deleteData(key){
        db.ref(`/${key}`).remove()
      }
    },
  }
</script>
<style scoped>
div{
  color: aliceblue
}
.judul{
  position: relative;
  left: 37%;
}
</style>
