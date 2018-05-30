<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="resultDev in resultsDeveloper" :key="resultDev.userId">
					<v-list-tile-avatar>
            <img :src="resultDev.avatarUrl">
          </v-list-tile-avatar>
					<v-list-tile-content>
            <v-list-tile-title>{{resultDev.developerName}}</v-list-tile-title>
          </v-list-tile-content>
				</v-list-tile>
    </v-flex>
  </v-layout>
</template>


<script>

async function created() {
	const urlDeveloper = 'developer';
	const token = localStorage.getItem('token');
	const responseDeveloper = await this.$http.get(urlDeveloper, {
		headers: { Authorization: `Bearer ${token}` },
	});
	this.resultsDeveloper = responseDeveloper.data;
	console.log(this.resultsDeveloper);
}

function data() {
	return {
		resultsDeveloper: [],
	};
}
export default {
	data,
	created,
};
</script>