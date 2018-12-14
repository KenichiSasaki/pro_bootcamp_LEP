import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "vuetify/dist/vuetify.min.css";
import { convertDateToString } from "@/filters/date-filter";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAFAY94ffg7tSYaENL2dYoYz22KCROUZqk",
  authDomain: "progarmmingbootcamp5.firebaseapp.com",
  databaseURL: "https://progarmmingbootcamp5.firebaseio.com",
  projectId: "progarmmingbootcamp5",
  storageBucket: "progarmmingbootcamp5.appspot.com",
  messagingSenderId: "128491241913"
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


