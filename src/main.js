import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ZeitUI from '@zeit-ui/vue'
import { install as ZeitIconsInstall } from '@zeit-ui/vue-icons'
import '@zeit-ui/vue/dist/zeit-ui.css' // require style

Vue.config.productionTip = false;
Vue.use(ZeitUI)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
ZeitIconsInstall(Vue)
