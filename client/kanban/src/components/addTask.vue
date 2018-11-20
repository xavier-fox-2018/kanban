<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <v-btn slot="activator" color="orange" dark>New Task</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Add new task</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Title*" required v-model="title"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Description*" required v-model="description"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false; $emit('addThis',{title: title,
            description: description})">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            title: '',
            description: ''
        }
    }
}
</script>

