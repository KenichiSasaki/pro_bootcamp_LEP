import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "vuetify/dist/vuetify.min.css";
import { convertDateToString } from "@/filters/date-filter";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCZz6ShA6t0zt2ZjDdKI3pWly33Yyb4cGA",
  authDomain: "leptitechfirebase.firebaseapp.com",
  databaseURL: "https://leptitechfirebase.firebaseio.com",
  projectId: "leptitechfirebase",
  storageBucket: "leptitechfirebase.appspot.com",
  messagingSenderId: "913775785175"
};
firebase.initializeApp(config);

Vue.use(Vuetify);
Vue.filter("date", convertDateToString);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


