<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="project in projects" :key="project.id">
					<v-list-tile-content>
            <v-list-tile-title>{{project.gitName}}</v-list-tile-title>
          </v-list-tile-content>
				</v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>

async function created() {
	const urlProjects = 'projects-token';
	const token = localStorage.getItem('token');
	const responseProjects = await this.$http.get(urlProjects, {
		headers: { Authorization: `Bearer ${token}` },
	});
	this.projects = responseProjects.data;
}

function data() {
	return {
		projects: [],
	};
}
export default {
	data,
	created,
};
</script>