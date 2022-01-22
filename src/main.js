import Vue from 'vue'
import App from './App.vue'

// BootstrapVue
import './plugins/BootstrapVue'
// Vue Font-Awesome
import './plugins/fontAwesome'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
