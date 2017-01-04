import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './routes';
import Home from './Home.vue';
import Nav from './Nav.vue';
import Boxes from './boxes/BoxesIndex.vue';
import Notebook from './notebook/NotebookIndex.vue';

Vue.component('app-nav', Nav);
Vue.component('app-home', Home);
Vue.component('app-boxes', Boxes);
Vue.component('app-notebook', Notebook);

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
