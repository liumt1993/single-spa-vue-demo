import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// single-spa-config.js
import { registerApplication, start } from 'single-spa';

// Simple usage
registerApplication(
  'app-a',
  () => window.System.import('app-a'),
  (location) => location.pathname.startsWith('/app-a'),
  { some: 'value' },
);

start();
