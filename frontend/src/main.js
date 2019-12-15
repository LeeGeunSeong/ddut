import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Router from "vue-router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Router);

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount("#app");
