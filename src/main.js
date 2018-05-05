import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueTheMask from 'vue-the-mask'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueTheMask);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
