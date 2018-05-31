<template>
 	<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0>
		 <v-toolbar>
				<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
				<v-spacer></v-spacer>
					<v-toolbar-items>
						<v-btn flat>{{codeUser}}</v-btn>
					</v-toolbar-items>
    	</v-toolbar>
	 	<v-layout row wrap>
		 	<v-flex xs8 md3>
			 <v-navigation-drawer stateless value="true" class="blue lighten-3 height" v-model="drawer">
    			<v-list v-for="result in results" :key="result.id">
			 			<v-list-group value="true">
        			<v-list-tile slot="activator">
								<img class="icon" :src="result.pathIcon">
          			<v-list-tile-title>{{result.name}}</v-list-tile-title>
        			</v-list-tile>
       				<v-list-tile v-for="resultlist in result.resource.data" :key="resultlist.position">
            		<v-list-tile-title class="sub-item" @click="option(resultlist.name)">{{resultlist.name}}</v-list-tile-title>
	              <img :src="resultlist.iconUrl" class="icon">
							</v-list-tile>
      			</v-list-group>
    			</v-list>
  			</v-navigation-drawer>
		 	</v-flex>
	 	</v-layout>
		<slot></slot>
 </v-container>
</template>

<script>

async function created() {
	const url = 'sidebar/git';
	const token = localStorage.getItem('token');
	const response = await this.$httpAcl.get(url, {
		headers: { Authorization: `Bearer ${token}` },
	});
	this.results = response.data.data;
}

function option(value) {
	if (value === 'Lista de desarrolladores') {
		this.$router.push({ name: 'developers' });
	}
}

function data() {
	return {
		results: [],
		drawer: null,
		codeUser: localStorage.getItem('code-user'),
	};
}
export default {
	name: 'layout-admin',
	data,
	created,
	methods: {
		option,
	},
};
</script>

<style lang="scss" scoped>
  .height {
		height: 100vh !important;
	}

	.icon {
		height: 20px;
		margin-right: 10px;
		width: 20px;
	}

	.sub-item {
		margin-left: 30px;
	}
</style>