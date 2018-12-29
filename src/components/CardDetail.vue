<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="this.$store.state.detailDialogOpen"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{card.title}}
          <v-spacer/>
          <v-btn color="blue darken-1" flat @click.native="closeDetailDialog" >Close</v-btn>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md px-auto>
            <v-layout pt-3>
              <span class="title">Assigned to</span>
            </v-layout>
            <v-layout row pl-4>
              <span >{{card.assignedTo}}</span>
            </v-layout>
            <v-layout row pt-3>
              <span class="title">Description </span>
            </v-layout>
            <v-layout row pl-4>
              <span >{{card.description}} </span>
            </v-layout>
            <v-layout row pt-3>
              <span class="title">Points </span>
            </v-layout >
            <v-layout row pl-4>
              <span >{{card.points}} pts</span>
            </v-layout>
            <v-layout row pt-3>
              <span class="title">Status </span>
            </v-layout >
            <v-layout row pl-4>
              <span >{{this.$store.state.laneName[card.status]}} </span>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            flat
            @click="slideLeft"
            :disabled="card.status === 0"
          >
            Move to {{this.$store.state.laneName[card.status - 1]}}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            flat
            @click="deleteCard"
          >
            Delete
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="slideRight"
            :disabled="card.status === 3"
          >
            Move to {{this.$store.state.laneName[card.status + 1]}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    closeDetailDialog () {
      this.$store.dispatch('closeDetailsDialog')
    },
    slideRight () {
      this.$firebasedb.ref('kanban/cards/' + this.card['.key']).set({
        title: this.card.title,
        description: this.card.description,
        points: Number(this.card.points),
        assignedTo: this.card.assignedTo,
        status: Number(this.card.status) + 1
      })
      this.$store.dispatch('moveStatusRight')
    },
    slideLeft () {
      this.$firebasedb.ref('kanban/cards/' + this.card['.key']).set({
        title: this.card.title,
        description: this.card.description,
        points: Number(this.card.points),
        assignedTo: this.card.assignedTo,
        status: Number(this.card.status) - 1
      })
      this.$store.dispatch('moveStatusLeft')
    },
    deleteCard () {
      if (confirm('Are you sure you want to delete this card?')) {
        this.$firebasedb.ref('kanban/cards/' + this.card['.key']).remove()
        this.closeDetailDialog()
      }
    }
  },
  computed: {
    card () {
      return this.$store.state.cardDetails
    }
  }
}
</script>
