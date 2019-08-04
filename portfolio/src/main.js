import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(AmplifyPlugin)
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
