<template>
  <div id="app">
    <div class="nav p-2 border-bottom">
      <h2>TAMVAN EH KANVAN</h2>
      <button type="button" class="btn btn-sm btn-outline-primary ml-auto mr-5" @click="createTask">Create Task</button>
    </div>
    <KanbanBoard ref="KanbanBoard"/>
  </div>
</template>

<script>
import KanbanBoard from '@/views/KanbanBoard.vue'
export default {
  components: {
    KanbanBoard
  },
  methods: {
    createTask () {
      this.$refs.KanbanBoard.modalCreateButton()
    }
  }
}
</script>
