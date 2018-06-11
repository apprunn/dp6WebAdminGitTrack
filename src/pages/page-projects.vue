<template>
<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="project in projects" :key="project.id" class="container">
					 <list-projects
							:gitName="project.gitName"
							:activityHours="project.activityHours"
							:milestoneHours="project.milestoneHours"
							:id="project.id"
							v-on:goToActivity ="goToActivity"
					 ></list-projects>
				</v-list-tile>
    </v-flex>
  </v-layout>
	</v-container>
</template>

<script>

import listProjects from '../components/list-projects';

async function created() {
	this.$store.dispatch('barProgress', true);
	this.show = true;
	const urlProjects = 'projects-token';
	const responseProjects = await this.$http.get(urlProjects);
	this.projects = responseProjects.data;
	this.$store.dispatch('barProgress', false);
}

function data() {
	return {
		projects: [],
	};
}

function goToActivity(id) {
	this.$router.push({ name: 'activity', params: { id } });
}
export default {
	name: 'page-projects',
	data,
	created,
	methods: {
		goToActivity,
	},
	components: {
		listProjects,
	},
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

