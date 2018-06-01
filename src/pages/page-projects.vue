<template>
<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0>
	<v-progress-linear
    	  :indeterminate="true"
    		:active="show"
				class="progress"
  	></v-progress-linear>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="project in projects" :key="project.id" class="container">
					<v-list-tile-content>
            <v-list-tile-title>{{project.gitName}}</v-list-tile-title>
						 <v-list-tile-sub-title>Activity Hours: {{project.activityHours}} h</v-list-tile-sub-title>
						  <v-list-tile-sub-title>Milestone Hours: {{project.milestoneHours}} h</v-list-tile-sub-title>
					</v-list-tile-content>
				</v-list-tile>
    </v-flex>
  </v-layout>
	</v-container>
</template>

<script>

async function created() {
	this.show = true;
	const urlProjects = 'projects-token';
	const token = localStorage.getItem('token');
	const responseProjects = await this.$http.get(urlProjects, {
		headers: { Authorization: `Bearer ${token}` },
	});
	this.projects = responseProjects.data;
	this.show = false;
}

function data() {
	return {
		projects: [],
		show: false,
	};
}
export default {
	data,
	created,
};
</script>

<style lang="scss" scoped>
	.container {
		height: 80px !important;
		padding: 0 !important;
	}

	.progress {
		margin-top: -57px !important;
    margin-bottom: 60px;
	}
</style>
