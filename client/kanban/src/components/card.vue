<template>
  <v-flex
    id="e3"
    style="width: 20%; margin: auto; "
    class="grey lighten-3"
  >
    <v-toolbar
      :color="description.color"
      dark
    >
      <v-toolbar-title> {{ description.name }} </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card v-for='(listIn , index ) in data' :key='index'>
      <v-container
        class="cardList"
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <list :data='listIn'/>
        </v-layout>
        <div class="tombol" >
            <button @click="$emit('deleteThis',listIn.key)" style="color:red">remove</button>
            <button v-if="description.name === 'Todo'" @click="$emit('updateThis',{status: 'Back-log', data: listIn})" style="color:orange">Back Log</button>
            <button v-if="description.name === 'Back Log' || description.name === 'Doing'" @click="$emit('updateThis',{status: 'Todo', data: listIn})" style="color:green">Todo</button>
            <button v-if="description.name === 'Todo' || description.name === 'Done'" @click="$emit('updateThis',{status: 'Doing', data: listIn})" style="color:blue">Doing</button>
            <button v-if="description.name === 'Doing'" @click="$emit('updateThis',{status: 'Done', data: listIn})" style="color:gold">Done</button>
        </div>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import list from '@/components/list.vue'
export default {
    components:{
        list
    },
    props:['data','description']
}
</script>
<style scoped>
button{
    margin: 10px 10px 0px 10px
}
.cardList{
    background: transparent
}
.close{
    position:absolute;
    right: 2px;
    top: -2px;
    color: red
}
.tombol button:hover{
    text-shadow: 1px 1px 2px #000000;
}
</style>

