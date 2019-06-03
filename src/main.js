import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase'

Vue.use(Vuetify);
Vue.config.productionTip = false


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWfdSDY7G7Uo_Ze4bUfCGT8Q6b7daipeA",
  authDomain: "chat01-6ebd4.firebaseapp.com",
  databaseURL: "https://chat01-6ebd4.firebaseio.com",
  projectId: "chat01-6ebd4",
  storageBucket: "chat01-6ebd4.appspot.com",
  messagingSenderId: "376787718028",
  appId: "1:376787718028:web:dee31d8cf3c56cf8"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.dispatch("getSpiderman");
  }
}).$mount('#app')
