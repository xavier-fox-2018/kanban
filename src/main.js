import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import db from './firebase'

Vue.config.productionTip = false

Vue.prototype.$firebasedb = db
Vue.use(VueFire)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
