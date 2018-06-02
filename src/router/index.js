import Vue from 'vue';
import Router from 'vue-router';
import pageHome from '@/pages/page-home';
import pageLogin from '@/pages/page-login';
import pageDevelopers from '@/pages/page-developers';
import pageProjects from '@/pages/page-projects';
import pageActivity from '@/pages/page-activity';

Vue.use(Router);

export default new Router({
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
					meta: {
						breadcrumb: [
							{ name: 'Home', link: '/' },
							{ name: 'Developers', link: '/developers' },
						],
					},
				},
				{
					path: '/projects',
					name: 'projects',
					component: pageProjects,
					meta: {
						breadcrumb: [
							{ name: 'Home', link: '/' },
							{ name: 'Project', link: '/projects' },
						],
					},
				},
				{
					path: '/projects/:id/activity',
					name: 'activity',
					component: pageActivity,
					meta: {
						breadcrumb: [
							{ name: 'Home', link: '/' },
							{ name: 'Project', link: '/projects' },
						],
					},
				},
			],
			meta: {
				breadcrumb: [
					{ name: 'Home', link: '/' },
				],
			},
		},
		{
			path: '/login',
			name: 'login',
			component: pageLogin,
		},
	],
});
