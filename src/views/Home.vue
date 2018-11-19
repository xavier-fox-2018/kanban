<template>
  <div class="home">
    <div class="container">
      <div class="row">

        <div class="col-12 bankan-title">
          <h3>Bankan,
            <small>making kanban your lifestyle.</small>
            <br>
          </h3>
          <h4>
            <small>"New task" to make your task, double click to edit and press "enter" to submit.</small>
          </h4>
        </div>

        <ParentCard :item="item" :allItems="allItems" :key="index" v-for="(item, index) in allItems"/>

      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import ParentCard from '@/components/ParentCard.vue'
import { db } from '../firebase.js'
import { allItems } from '../firebase.js'
import { allItems1 } from '../firebase.js'

export default {
  name: 'home',
  components: {
    ParentCard
  },
  data() {
    return {

      // allItemsOne
      allItems1: {
        backlog: {
          class: {
            cardClass: 'bg-danger',
            cardHeader: 'Backlog'
          },
          items: [
            {
              title: 'Black Tie Swagger',
              points: 10,
              assignee: 'Mifzan',
            }
          ]
        }
        ,
        newKanban: {
          class: {
            cardClass: 'bg-warning',
            cardHeader: 'New'
          },
          items: [
            {
              title: 'Black Pride Nigga',
              points: 10,
              assignee: 'Mifzan'
            }
          ]
        },
        progress: {
          class: {
            cardClass: 'bg-primary',
            cardHeader: 'Progress'
          },
          items: [
            {
              title: 'Black Lives Matter',
              points: 10,
              assignee: 'Mifzan',
            }
          ]
        }
        ,
        finish: {
          class: {
            cardClass: 'bg-success',
            cardHeader: 'Finish'
          },
          items: [
            {
              title: 'Black Eye Shadow',
              points: 10,
              assignee: 'Mifzan',
            }
          ]
        },
      },

      allItems: []
    }
  },
  firebase: {
    allItems: allItems, // this is the original line
    // allItems1: allItems1
  },
  mounted() {
    // allItems1.push(this.allItems1)
  },
  watch: {
    allItems: {
      handler: function(n, o) {
        // allItems1.push(this.allItems)
        
        if (n) {
          // let toUpdate = {
          //   backlog: {},
          //   new: {},
          //   class: {},
          //   items: {}
          // }

          for (let i in n) {
            allItems.child(n[i]['.key']).set({
              class: n[i].class,
              items: n[i].items
            })
          }

          // for (let i in n) {
          //   toUpdate[n[i]['.key']] = {
          //     class: n[i].class,
          //     items: n[i].items
          //   }
          // }

          // allItems.set(toUpdate)
        }
      },
      deep: true
    },
    allItems1: {
      handler: function(n, o) {
        this.allItems1 = o
      },
      deep: true
    }
  }
}
</script>

<style>
.kanban-card {
  margin-bottom: 4%;
}

.container {
  margin-top: 2%;
}

.bankan-title {
  margin-bottom: 3%
}
</style>
