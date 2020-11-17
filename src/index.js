import Vue from "vue";
import Vuex from 'vuex';
import store from './store/store.js'

Vue.use(Vuex);

import App from "./App.vue";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");