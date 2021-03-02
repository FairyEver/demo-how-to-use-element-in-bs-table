import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(ElementUI)

import './plugins/table.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
