<template>
<div class="card">
  <div class="card-body text-center">
    <p class="card-text"><strong>{{ data.data.title }}</strong></p>
    <p class="card-text"> {{ data.data.description }} </p>
  </div>
</div>
    
</template>
<script>
export default {
    props:['data']
    
    
}
</script>
<style scoped>
.card{
    background-color: rgba(34,34,34,0.1);
    box-shadow: 1px 1px 5px grey;
}
.card:hover{
    background-color: rgba(34,34,34,0.1);
    box-shadow: 3px 3px 7px grey;
}

</style>


