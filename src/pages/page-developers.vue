<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="developer in developers" :key="developer.userId">
					<v-list-tile-avatar>
            <img :src="developer.avatarUrl">
          </v-list-tile-avatar>
					<v-list-tile-content>
            <v-list-tile-title>{{developer.developerName}}</v-list-tile-title>
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
	this.developers = responseDeveloper.data;
}

function data() {
	return {
		developers: [],
	};
}
export default {
	data,
	created,
};
</script>