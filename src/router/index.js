import Vue from 'vue';
import Router from 'vue-router';
import pageHome from '@/pages/page-home';
import pageLogin from '@/pages/page-login';
import pageDevelopers from '@/pages/page-developers';
import pageProjects from '@/pages/page-projects';
import pageActivity from '@/pages/page-activity';

Vue.use(Router);
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: pageHome,
			children: [
				{
					path: '/developers',
					name: 'developers',
					component: pageDevelopers,
				},
				{
					path: '/projects',
					name: 'projects',
					component: pageProjects,
				},
				{
					path: '/projects/:id/activity',
					name: 'activity',
					component: pageActivity,
				},
			],
		},
		{
			path: '/login',
			name: 'login',
			component: pageLogin,
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.name === 'login') {
		next();
	} else {
		const authUser = window.localStorage.getItem('token');
		if (authUser) {
			next();
		} else {
			next({ name: 'login' });
		}
	}
});

export default router;

