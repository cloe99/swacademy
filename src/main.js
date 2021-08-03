import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from 'vuefire'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'


Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.use(firestorePlugin);

new Vue({
  render: h => h(App), router,
}).$mount('#app')
