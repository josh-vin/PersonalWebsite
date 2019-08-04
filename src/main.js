import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import VueAnalytics from 'vue-analytics'

Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'UA-145116461-1',
  autoTracking: {
    screenview: true
  },
  router
})