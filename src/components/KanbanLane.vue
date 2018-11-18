<template>
  <v-flex
    style="max-width: 300px"
    class="grey lighten-3"
    align-start
    mx-auto
  >
    <v-toolbar
      :class="colorStatus[status]"
      dark
    >
      <v-toolbar-title class="mx-auto">{{this.$store.state.laneName[status]}}</v-toolbar-title>
    </v-toolbar>
    <div v-for="(card, index) in cards" :key="index">
    <kanban-card  :card= "card"/>
    </div>
  </v-flex>
</template>

<script>
import KanbanCard from '@/components/KanbanCard'
export default {
  props: ['status', 'cards'],
  components: {
    KanbanCard
  },
  data () {
    return {
      colorStatus: ['red darken-4', 'teal darken-2', 'orange darken-2', 'brown darken-1']
    }
  }
}
</script>

<style>

</style>
