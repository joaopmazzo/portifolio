import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 2000,
  scale: 1,
  distance: '80px',
  origin: 'top'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
