
<template>
 	<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0>
	 	<v-layout row wrap>
		 	<v-flex xs8 md3>
			 <v-navigation-drawer stateless value="true" class="blue lighten-3 height">
    			<v-list v-for="result in results" :key="result.id">
			 			<v-list-group value="true">
        			<v-list-tile slot="activator">
								<img class="icon" :src="result.pathIcon">
          			<v-list-tile-title>{{result.name}}</v-list-tile-title>
        			</v-list-tile>
							<div v-for="resultlist in result.resource.data" :key="resultlist.position">
								<div  v-if="option(resultlist.name)">
									<v-list-tile v-for="resultDev in resultsDeveloper" :key="resultDev.userId">
										 <v-list-tile-avatar>
                         <img :src="resultDev.avatarUrl">
                    </v-list-tile-avatar>
										 <v-list-tile-content>
                        <v-list-tile-title>{{resultDev.developerName}}</v-list-tile-title>
                     </v-list-tile-content>
									</v-list-tile>
								</div>
								<div v-else>
									<v-list-tile v-for="resultlist in result.resource.data" :key="resultlist.position">
            				<v-list-tile-title class="sub-item">{{resultlist.name}}</v-list-tile-title>
	              		<img :src="resultlist.iconUrl" class="icon">
									</v-list-tile>
								</div>
							</div>
      			</v-list-group>
    			</v-list>
  			</v-navigation-drawer>
		 	</v-flex>	
	 	</v-layout>	 
 </v-container>
</template>

<script>

async function created() {
	const url = 'sidebar/git';
	const urlDeveloper = 'developer';
	const token = localStorage.getItem('token');
	const response = await this.$httpAcl.get(url, {
		headers: { Authorization: `Bearer ${token}` },
	});
	this.results = response.data.data;

	const responseDeveloper = await this.$http.get(urlDeveloper, {
		headers: { Authorization: `Bearer ${token}` },
	});
	this.resultsDeveloper = responseDeveloper.data;
}

function option(value) {
	return value === 'Lista de desarrolladores';
}
function data() {
	return {
		results: [],
		resultsDeveloper: [],
	};
}
export default {
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

	.pr {
		height: auto !important;
	}
</style>