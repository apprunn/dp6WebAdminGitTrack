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
			meta: { requiresAuth: true },
			children: [
				{
					path: '/developers',
					name: 'developers',
					component: pageDevelopers,
					meta: { requiresAuth: true },
				},
				{
					path: '/projects',
					name: 'projects',
					component: pageProjects,
					meta: { requiresAuth: true },
				},
				{
					path: '/projects/:id/activity',
					name: 'activity',
					component: pageActivity,
					meta: { requiresAuth: true },
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
	if (to.meta.requiresAuth) {
		const authUser = window.localStorage.getItem('token');
		if (authUser) {
			next();
		} else {
			next({ name: 'login' });
		}
	}
	next();
});

export default router;

