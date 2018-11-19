<template>
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#iniunikriz">
      {{detailchild.status}}
    </button>
    <div class="modal fade" id="iniunikriz" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <h1>{{detailchild.title}}</h1>
              <hr>
              <h2>Description : {{detailchild.description}}</h2>
              <h4>Point : {{detailchild.point}}</h4>
              <h4>Status : {{detailchild.status}}</h4>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"detailModal",
  data(){
    return {
      next: '',
      prev: ''
    }
  },
  props:['detailchild', 'id'],
  created(){
    // console.log(this.detailchild)
    // if (this.detailchild.status) {
    // }
    // console.log('ini yang diterima modal',this.detailchild)
  },
  methods:{
  }
}
</script>

<style>

</style>
