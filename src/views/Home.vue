<template>
 <v-container fluid>
   <v-layout align-start justify-center row>
     <v-flex xs-6>
        <h1 class="display-2 text-xs-center">Kanban Board</h1>
        <v-btn color="primary" fab small dark @click = "openDialog">
          <v-icon>edit</v-icon>
        </v-btn>
     </v-flex>
   </v-layout>
   <add-card />
   <kanban-board />
   <card-detail />
 </v-container>

</template>

<script>
import KanbanBoard from '@/components/KanbanBoard'
import AddCard from '@/components/AddCard'
import CardDetail from '@/components/CardDetail'
export default {
  components: {
    AddCard,
    KanbanBoard,
    CardDetail
  },
  methods: {
    openDialog () {
      this.$store.dispatch('openDialog')
    }
  }
}
</script>
