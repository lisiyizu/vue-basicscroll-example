import Vue from 'vue'
import App from './App.vue'
import router from './router'
import directives from './directives'

Vue.config.productionTip = false

Vue.use(directives);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
