import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './API/backEndServer';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
