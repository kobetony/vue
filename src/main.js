
import Vue from 'vue'
import App from './App'
import router from "./pages/router"
import 'lib-flexible/flexible'

import "./mockdata/mockServer"

Vue.config.productionTip = false
new Vue({
  el: '#app',

  components: { App },
  template: '<App/>',
  router
})
