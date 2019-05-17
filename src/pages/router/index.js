import Vue from "vue"
import vueRouter  from "vue-router"

Vue.use(vueRouter)
import routes   from "../routes"
const router = new vueRouter({

  routes,
  mode:"history",
  linkActiveClass:"active"
})
export default router
