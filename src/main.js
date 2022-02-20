import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import {routes} from "./routes";
import store from './store';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Buefy);


const router = new VueRouter({
    mode: 'history',
    routes
});


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
