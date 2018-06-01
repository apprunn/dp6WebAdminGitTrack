<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="project in projects" :key="project.id" class="container">
					<v-list-tile-content>
            <v-list-tile-title @click="goToActivity($event)" :data-id="project.id">{{project.gitName}}</v-list-tile-title>
						 <v-list-tile-sub-title>Activity Hours: {{project.activityHours}} h</v-list-tile-sub-title>
						  <v-list-tile-sub-title>Milestone Hours: {{project.milestoneHours}} h</v-list-tile-sub-title>
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

function goToActivity(event) {
	const id = event.currentTarget.getAttribute('data-id');
	this.$router.push({ name: 'activity', params: { id } });
}
export default {
	name: 'page-projects',
	data,
	created,
	methods: {
		goToActivity,
	},
};
</script>

<style lang="scss" scoped>
	.container {
		height: 80px !important;
		padding: 0 !important;
	}
</style>

