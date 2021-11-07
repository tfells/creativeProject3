import Vue from 'vue'
import App from './App.vue'
import mock from './mock-cufflinks.js'
import mock2 from './mock-watches.js'
import router from './router/index.js'

Vue.config.productionTip = false

let data = {
  cufflinks: mock,
  watches: mock2,
  selected: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
