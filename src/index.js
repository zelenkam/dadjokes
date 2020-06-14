import Vue from 'vue/dist/vue.js';

import App from './components/App.vue';
import './index.html';

new Vue({
  el: '#app',
  render: h => h(App),
});