<template>
  <div class="mx-4 my-2">
    <div class="row">
      <div class="col-md-3" v-for="(board,index) in boards" :key="index">
        <div class="card">
          <div class="card-header" v-bind:style="{ backgroundColor: board.color,color: 'white'}">
            {{board.name}}
          </div>
          <div class="card-body">
            <!-- {{result}} -->
            <Card :allData="result" :currentstate="board.name"></Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/config.js'
import Card from '@/components/Cards.vue'

export default {
  name: 'home',
  data(){
    return {
      boards: [{
        name: 'Back-Log',
        color: 'red'
      },{
        name: 'To-Do',
        color: 'orange'
      },{
        name: 'Doing',
        color: '#007bff'
      },{
        name: 'Done',
        color: 'green'
      }],
      tasks: [],
      result: []
    }
  },
  mounted(){
    this.getTask()
  },
  methods:{
    functionSend(value){
      this.value = value
    },
    getTask(){
      let db = firebaseApp.database()
      this.tasks = []
      this.result = []
      db.ref(`/Tasks`).on('value', (snapshot)=>{
        let tasks = snapshot.val();

				this.tasks = [];

				for (let id in tasks) {
					let currTask = tasks[id];

					let task = {
						id: id,
						title: currTask.title,
						description: currTask.description,
						point: currTask.point,
						assignedTo: currTask.assignedTo,
						status: currTask.status
					}

					this.tasks.push(task);
        }
        this.result = this.tasks
        // this.result = snapshot.val()
        console.log('ini smua dataa',this.result)
      })
    }
  },
  components:{
    Card
  }
}
setTimeout(function() {
  $("#myloader").css("display","none");
}, 5000);
</script>

