<template>
 	<layout-admin>
		  <v-breadcrumbs divider="/">
			<v-breadcrumbs-item to="/" router>Home</v-breadcrumbs-item>
					<v-breadcrumbs-item 
         v-for="item in array"
				 :key="item"
				 :to="item"
			>
        {{ item }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
		 <router-view></router-view>
 	</layout-admin>
</template>

<script>


function ruta() {
	return this.$route.path;
}

function routes() {
	this.array = this.$route.path.slice(1).split('/');
}

function data() {
	return {
		array: [],
	};
}

export default {
	name: 'page-home',
	data,
	computed: {
		ruta,
		routes,
	},
};
</script>
