<template>
  <div class="about">
    <button @click="tesfirebase"></button>
    
  </div>
</template>
<script>
import firebaseApp from '@/assets/config.js'
export default {
  name:"About",
  methods: {
    tesfirebase(){
      
    }
  },
  mounted(){
    const db = firebaseApp.database();
    //get
    // db.ref('me').on('value',snapshot => {
    //   console.log(snapshot.val())
    // })
    //read
    // let id = 3
    // db.ref('users/' + id).set({
    //   username: 'iqbal',
    //   email: 'iqbal@mail.com'
    // });
    //update
    //delete

    // var newPostKey = db.ref().child('posts').push().key;
    // console.log(newPostKey);
  }
}
</script>

<style>

</style>

