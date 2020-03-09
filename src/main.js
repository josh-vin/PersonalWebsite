import Vue from 'vue';
import App from './App.vue'
import jquery from 'jquery'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

Vue.prototype.jquery = jquery
Vue.config.productionTip = false

require('bootstrap')
require('jquery.easing')
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

new Vue({
  render: h => h(App),
}).$mount('#app')