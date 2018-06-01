<template>
 	<layout-admin>
		 {{routes}}
		  <v-breadcrumbs divider="/">
			<v-breadcrumbs-item to="/">Home</v-breadcrumbs-item>
			<v-breadcrumbs-item 
         v-for="element in arrayRoutes"
				 :key="element"
				 :to="element"
			>
        {{ element }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
		 <router-view></router-view>
 	</layout-admin>
</template>

<script>
function routes() {
	this.arrayRoutes = this.$route.path.slice(1).split('/');
}

function data() {
	return {
		arrayRoutes: [],
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
