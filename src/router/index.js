import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import login from '@/components/login';
import developers from '@/components/developers';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/login',
			name: 'login',
			component: login,
		},
		{
			path: '/developers',
			name: 'developers',
			component: developers,
		},
	],
});
