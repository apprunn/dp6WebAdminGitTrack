import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import login from '@/components/login';
import templates from '@/components/templates';

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
			path: '/templates/new',
			name: 'templates',
			component: templates,
		},
	],
});
