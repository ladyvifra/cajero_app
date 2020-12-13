// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'//importar el vuerouter y hacer uso d elas rutas

import router from './router' //importamos el router que se creó
Vue.use(vueRouter) //vue va a usar el vue de un obheto tipo vueRouter

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,// se debe poner el router creado
  el: '#app',
  components: { App },
  template: '<App/>'

})
