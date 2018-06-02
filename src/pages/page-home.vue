<template>
 	<layout-admin>
		 {{routes}}
		  <v-breadcrumbs divider="/">
			<v-breadcrumbs-item 
         v-for="element in route"
				 :key="element.name"
				 :to="element.link"
				 :disabled="false"
			>
        {{ element.name }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
		 <router-view></router-view>
 	</layout-admin>
</template>

<script>
function routes() {
	this.route = this.$route.meta.breadcrumb;
	this.arrayRoutes = this.$route.path.slice(1).split('/');
	this.arrayRoutes2 = this.$route.path.split('/');
	console.log(this.route);
}

function data() {
	return {
		arrayRoutes: [],
		arrayRoutes2: [],
		bread: [],
		route: null,
	};
}

export default {
	name: 'page-home',
	data,
	computed: {
		routes,
	},
};
</script>
