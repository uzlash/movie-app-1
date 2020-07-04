import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=86e48c8a&page=1&type=movie&Content-Type=application/json'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
