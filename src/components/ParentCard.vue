<template>
  <div class="col col-md-3 col-sm-12">
    <div class="card text-white mb-3 shadow" :class="item.class.cardClass">
      <div class="card-header">{{ item.class.cardHeader }}</div>
      <div class="card-body">

        <!-- <draggable v-model="item.items" :options="{group:'tasks'}" 
        @start="drag=true" @end="drag=false" :key="index" v-for="(list, index) in item.items" >
          <div class="placeholder">
            <Card @deleteTask="deleteTask" :list="list" :key="index"/>
          </div>
        </draggable> -->

        <draggable v-model="item.items" :options="{group:'tasks'}">
            <Card @deleteTask="deleteTask" :list="list" :key="index" v-for="(list, index) in item.items"/>
        </draggable>
      </div>
      
      <div v-if="this.item.class.cardHeader === 'Backlog'" class="container">
        <button type="button" class="btn btn-link btn-block text-white" @click="newTask">New task</button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    Card,
    draggable
  },
  props: ['item', 'allItems'],
  data() {
    return {

    }
  },
  methods: {
    newTask() {
      this.item.items.push({
        title: 'Title',
        points: 0,
        assignee: 'Assignee'
      })
    },

    deleteTask(val) {
      console.log(`ini items:`, this.item.items)
      console.log(`ini val:`, val)
      for (let i in this.item.items) {
        let item = this.item.items[i]
        if (
          (item.title === val.list.title) &&
          (item.points === val.list.points) &&
          (item.assignee === val.list.assignee)) {
            this.item.items.splice(i, 1)
          }
      }
    }
  },
  mounted() {
    console.log(this.allItems)
  }
}
</script>

<style>
.container {
  margin-top: 2%;
}

.placeholder {
  min-height: 5px;
}
</style>