<template>
  <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
           <v-flex xs12>
            <v-card color="purple" class="yellow lighten-3">
              <v-layout row>
                <v-flex xs12>
                  <v-card-title primary-title class="pa-0 pl-2">
                    <div>
                      <div class="headline" >{{card.title}}</div>
                      <div>{{card.points}} points</div>
                      <div>Assigned to: {{card.assignedTo}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <div class="text-xs-center">
                <v-btn @click="detailCard">Description</v-btn>
              </div>
              <v-divider light></v-divider>
              <v-card-actions class="px-3 py-1" justify-space-between>
                <v-btn round dark class="blue darken-3" :disabled="card.status === 0" @click="slideLeft">
                  <v-icon dark>arrow_left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn round dark class="blue darken-3" :disabled="card.status === 3" @click="slideRight">
                  <v-icon dark>arrow_right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
</template>

<script>
export default {
  props: ['card'],
  methods: {
    slideRight () {
      this.$firebasedb.ref('kanban/cards/' + this.card['.key']).set({
        title: this.card.title,
        description: this.card.description,
        points: Number(this.card.points),
        assignedTo: this.card.assignedTo,
        status: Number(this.card.status) + 1
      })
    },
    slideLeft () {
      this.$firebasedb.ref('kanban/cards/' + this.card['.key']).set({
        title: this.card.title,
        description: this.card.description,
        points: Number(this.card.points),
        assignedTo: this.card.assignedTo,
        status: Number(this.card.status) - 1
      })
    },
    detailCard () {
      this.$store.dispatch('changeDetails', this.card)
      this.$store.dispatch('openDetailsDialog')
    }
  }
}
</script>
