<template>
  <div class="board col-md-3">
    <div class="card">
      <div class="card-header text-center" :class="bgColor(title)">{{ title }}</div>
      <div class="card-container p-2">
        <PerTask 
          v-for="(task, index) in list"
          :key="index"
          :task="task"
          @delete-task="deleteTask"
          @update-task="updateTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PerTask from '@/components/PerTask.vue';
export default {
  props: ['title', 'list'],
  components: {
    PerTask
  },
  methods: {
    deleteTask (id) {
      this.$emit('delete-task', id)
    },
    updateTask (task) {
      this.$emit('update-task', task)
    },
    bgColor (title) {
      switch(title) {
        case 'Back-Log': return 'bg-primary'; break
        case 'To-Do': return 'bg-danger'; break
        case 'Doing': return 'bg-warning'; break
        case 'Done': return 'bg-success'; break
      }
    }
  }
}
</script>
