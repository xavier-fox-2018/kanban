import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import router from './router'

// import firebase from "firebase"
//   var config = {
//     apiKey: "AIzaSyAW1VCSZ8j-UXjz2a568l9P-Z2c5_jRzoE",
//     authDomain: "kanban-arul.firebaseapp.com",
//     databaseURL: "https://kanban-arul.firebaseio.com",
//     projectId: "kanban-arul",
//     storageBucket: "kanban-arul.appspot.com",
//     messagingSenderId: "459807778132"
//   };
// const firebaseApp = firebase.initializeApp(config);

// const db = firebaseApp.database();
// Vue.prototype.$taskRef = db.ref('tasks')


Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
