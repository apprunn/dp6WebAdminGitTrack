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
        {{ nameRoutes(element) }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
		 <router-view></router-view>
 	</layout-admin>
</template>

<script>
function routes() {
	this.arrayRoutes = this.$route.path.slice(1).split('/');
}

function nameRoutes(value) {
	let name;
	if (value === 'developers') {
		name = 'Developers';
	}
	if (value === 'projects') {
		name = 'Projects';
	}
	return name;
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
	},
};
</script>
