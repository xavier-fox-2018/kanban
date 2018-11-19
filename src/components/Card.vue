<template>
<div @dblclick="editModal = true" v-on:keyup.enter="editModal = false">
  <div class="card text-justify kanban-card shadow" >
    <div v-if="!editModal" class="card-header text-dark">
      {{ list.title }}
    </div>

    <div class="container">
      <input v-if="editModal" v-model="list.title" type="text" class="form-control">
    </div>

    <div class="card-body">
      <blockquote class="mb-0">
        <p v-if="!editModal" class="text-dark">{{ list.points }}</p>
        <input v-if="editModal" v-model="list.points" type="number" class="form-control">
        <p v-if="!editModal" class="text-dark">{{ list.assignee }}</p>
        <input v-if="editModal" v-model="list.assignee" type="text" class="form-control">
        <button @click="deleteItem" v-if="editModal" type="button" class="btn btn-dark btn-block btn-delete">Delete</button>   
      </blockquote>
    </div>
  </div>
</div>
</template>

<script>

export default {
  components: {},
  props: ['list', 'position'],
  data() {
    return {
      editModal: false
    }
  },
  methods: {
    deleteItem() {
      this.$emit('deleteTask', {
        list: this.list
      })
    }
  },
  watch: {
  },
  mounted() {
    // this.list.title === 'Title' ? this.editModal = true : null
    // console.log(this.position)
  }
}
</script> 

<style>
.form-control {
  margin-top: 2%;
}

.card-body, .card-header {
  padding: 12px;
}

.btn-delete {
  margin-top: 5%;
}
</style>
