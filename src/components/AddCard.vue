<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.$store.state.dialogOpen" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add a new Task!</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form v-model="valid">
              <v-text-field
                v-model="title"
                :rules="requiredRule"
                label="Title *"
                required
              ></v-text-field>
              <v-text-field
                v-model="assignedTo"
                label="Assign Task to"
                required
              ></v-text-field>
              <v-textarea
                v-model="description"
                label="Description"
              ></v-textarea>
              <v-flex xs12>
                <v-subheader class="pl-0">Points</v-subheader>
                <v-slider
                  v-model="points"
                  thumb-label="always"
                ></v-slider>
              </v-flex>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="saveCard">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      title: '',
      description: '',
      assignedTo: '',
      points: 0,
      requiredRule: [
        (value) => !!value || 'This field is required'
      ]
    }
  },
  methods: {
    closeDialog () {
      this.$store.dispatch('closeDialog')
    },
    saveCard () {
      this.$firebasedb
        .ref('kanban')
        .child('cards')
        .push({
          title: this.title,
          description: this.description,
          assignedTo: this.assignedTo,
          points: this.points,
          status: 0
        })
      this.$store.dispatch('closeDialog')
      this.valid = false
      this.title = ''
      this.description = ''
      this.assignedTo = ''
      this.points = 0
    }
  }
}
</script>

<style>

</style>
