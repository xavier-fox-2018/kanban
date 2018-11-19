<template>
  <div class="container my-1">
    <ModalCreateTask></ModalCreateTask>
    <div class="row">
      <div class="col-sm-2">
        Kanban
      </div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2">
        <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCreateTask">Create task</button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalCreateTask from '@/components/ModalCreateTask.vue'
export default {
  components:{
    ModalCreateTask
  }
}
</script>

<style>

</style>
