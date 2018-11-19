<template>
  <div>
      <div class="card my-2" v-for="(task,index) in allData" :key="index" v-if="task.status == currentstate">
        <div class="card-body">
          <h5 class="card-title">{{task.title}}</h5>
          <hr>
          <p class="card-text">Point: {{task.point}}</p>
          <p class="card-text">Assigned To: {{task.assignedTo}}</p>
          <router-link :to="{ name: 'detail', params: { task } }"><button class="btn btn-primary">Show Detail</button></router-link>
          <!-- <ModalDetail :detailchild="task"></ModalDetail> -->
        </div>
      </div>
  </div>
</template>

<script>
import firebaseApp from '@/assets/config.js'
import ModalDetail from '@/components/ModalDetail.vue'
export default {
  name: 'Card',
  data(){
    return {
      db : firebaseApp.database(),
      detail: {},
      alltasks: [],
      modalShow: false,
      msg: '5ssd'
    }
  },
  props: ['allData', 'currentstate'],
  methods: {
    sendInfo(value){
      // this.detail = state
      this.detail['value'] = value
      this.detail['currentstate'] = this.currentstate
      console.log('liat ini',this.detail)
    }
  },
  components: {
    ModalDetail
  }
}
</script>

<style>

</style>
