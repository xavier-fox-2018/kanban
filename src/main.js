import "./firebase.js";
import VueFire from "vuefire";
import Vue from 'vue'
import VueProgressBar from "vue-progressbar"
import NProgress from "nprogress";
import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/nprogress/nprogress.css";

const options = {
  color: "#bffaf3",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "left",
  inverse: false
};

Vue.use(VueFire);
Vue.config.productionTip = false
Vue.use(VueProgressBar, options);

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
