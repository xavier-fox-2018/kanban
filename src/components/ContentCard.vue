<template>
  <div class="cardContent">
    <h2>{{item.title}}</h2>
    <div class="container-button">
      <div>
        <h4 @click="actionTwo" v-if="buttonTwo">{{buttonTwo}}</h4>
      </div>
      <div>
        <h4 @click="actionOne">{{buttonOne}}</h4>
      </div>
      <div>
        <h4 @click="removeItem" style="color : red;">delete</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import database from '../assets/config.js'
  export default {
    name: 'ContentCard',
    data: function() {
      return {
        buttonOne: '',
        buttonTwo: ''
      }
    },
    props: ['item', 'name'],
    methods: {
      actionOne() {
        database.ref(`/${this.item.id}`).remove()
        database.ref('/').push({
          title: this.item.title,
          status: this.buttonOne
        })
      },
      actionTwo() {
        database.ref(`/${this.item.id}`).remove()
        database.ref('/').push({
          title: this.item.title,
          status: this.buttonTwo
        })
      },
      removeItem() {
        database.ref(`/${this.item.id}`).remove()
      }
    },
    created() {
      if (this.name === 'Pre-Log') {
        this.buttonOne = 'To-Do'
        this.buttonTwo = null
      } else if (this.name === 'To-Do') {
        this.buttonOne = 'Pre-Log'
        this.buttonTwo = 'On-Going'
      } else if (this.name === 'On-Going') {
        this.buttonOne = 'Finished'
        this.buttonTwo = 'To-Do'
      } else if (this.name === 'Finished') {
        this.buttonOne = 'On-Going'
        this.buttonTwo = null
      }
    }
  }
</script>

<style scoped>
  .cardContent {
    border-radius: 10px;
    font-size: 10px;
    color: #fff;
    width: 90%;
    min-height: 90px;
    background-color: #12c79a;
    box-shadow: 0px 5px 4px #c0c0c09d;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 10px;
    vertical-align: middle;
    cursor: pointer;
    padding-bottom: 10px;
  }
  
  .card h2 {
    padding-top: 10px;
    font-size: 20px;
  }
  
  .container-button h4 {
    color: #0c8b7a;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 50%;
    padding: 5%;
    border-radius: 5px;
  }
  
  .container-button {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>