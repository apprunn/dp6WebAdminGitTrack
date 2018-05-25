import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import login from '@/components/login';
import sidebar from '@/components/sidebar';

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
			path: '/sidebar',
			name: 'sidebar',
			component: sidebar,
		},
	],
});
