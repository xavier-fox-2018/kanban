<template>
  <v-container fluid align-start>
    <v-layout align-start>
      <kanban-lane :status="0" :cards="backLog"></kanban-lane>
      <kanban-lane :status="1" :cards="toDo"></kanban-lane>
      <kanban-lane :status="2" :cards="onProgress"></kanban-lane>
      <kanban-lane :status="3" :cards="finished"></kanban-lane>
    </v-layout>
  </v-container>
</template>

<script>
import KanbanLane from '@/components/KanbanLane'
export default {
  components: { KanbanLane },
  firebase () {
    return {
      cards: {
        source: this.$firebasedb.ref('kanban/cards'),
        anArray: true
      }
    }
  },
  computed: {
    backLog () {
      return this.cards.filter(value => value.status === 0).sort((a, b) => { return b.points - a.points })
    },
    toDo () {
      return this.cards.filter(value => value.status === 1).sort((a, b) => { return b.points - a.points })
    },
    onProgress () {
      return this.cards.filter(value => value.status === 2).sort((a, b) => { return b.points - a.points })
    },
    finished () {
      return this.cards.filter(value => value.status === 3).sort((a, b) => { return b.points - a.points })
    }
  }
}
</script>
