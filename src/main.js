import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Calendar from "vue-calendar-component";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Calendar);
Vue.use(ElementUI);
  
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
