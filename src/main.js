require('./assets/sass/app.scss')

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'

import Vue from 'vue';

// Uncomment if babel-polyfill is required (but larger).
// import 'babel-polyfill'

import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
