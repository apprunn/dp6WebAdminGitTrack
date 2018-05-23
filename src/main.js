import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import 'normalize.css';
import App from './App';
import router from './router';

const instance = axios.create({
	baseURL: process.env.URL,
});

Vue.use(Vuetify);
Vue.prototype.$http = instance;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
