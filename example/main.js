import Vue from "vue";
import vueHljs from "vue-hljs";
import VueGoodTablePlugin from "vue-good-table";
import App from "./App.vue";

import "vue-hljs/dist/vue-hljs.min.css";
import "vue-good-table/dist/vue-good-table.css";

Vue.use(vueHljs);
Vue.use(VueGoodTablePlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
