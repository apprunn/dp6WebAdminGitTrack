<template>
 	<layout-admin>
		 {{routes}}
		  <v-breadcrumbs divider="/">
		 	<v-breadcrumbs-item to="/">Home</v-breadcrumbs-item>
			<v-breadcrumbs-item 
				 v-for="element in arrayRoutes"
				 :key="element"
				 :exact = true
				 :to ="toRoutes(element)">
        {{ nameRoutes(element) }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
		 <router-view></router-view>
 	</layout-admin>
</template>

<script>
function routes() {
	this.arrayRoutes = this.$route.path.slice(1).split('/');
	console.log(this.arrayRoutes);
	console.log(isNaN(this.$route.params.id));
}

function nameRoutes(value) {
	let name;
	if (value === 'developers') {
		name = 'Developers';
	}
	if (value === 'projects') {
		name = 'Projects';
	}

	if (!isNaN(value) && this.arrayRoutes[0] === 'projects') {
		name = this.$route.params.id;
	}

	return name;
}

function toRoutes(value) {
	let route;
	if (value === 'projects') {
		route = '/projects';
	}

	if (value === 'developers') {
		route = '/developers';
	}

	if (!isNaN(value) && this.arrayRoutes[0] === 'projects') {
		route = `/projects/${this.$route.params.id}/activity`;
	}

	return route;
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
	methods: {
		nameRoutes,
		toRoutes,
	},
};
</script>
