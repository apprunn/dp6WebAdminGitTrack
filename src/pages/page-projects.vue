<template>
<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0 class="background-container">
	<v-layout row class="container-search">
		<v-flex xs6 offset-xs5>
			<v-container>
				<v-text-field
				  prepend-icon="search"
					hide-details
					 class="search"
					 placeholder="Buscar"
					 single-line
				></v-text-field>		 
			</v-container>		
		</v-flex>	
	</v-layout>	
	<v-layout row>
		<v-flex xs4 offset-xs8>
				<v-btn class="button btn-green background-container">Agregar</v-btn>
		</v-flex>
	</v-layout>
  <v-layout row v-for="project in projects" :key="project.id">
    <v-flex xs12 sm6 offset-sm3>
			<list-projects
				:gitName="project.gitName"
				:activityHours="project.activityHours"
				:milestoneHours="project.milestoneHours"
				:id="project.id"
				:list="project.gitBody"
				:milestoneDateStart="project.milestoneDateStart"
				:milestoneDateEnd="project.milestoneDateEnd"
				v-on:goToActivity ="goToActivity"
				v-on:goToDashboard ="goToDashboard"
			 ></list-projects>
    </v-flex>
  </v-layout>
	</v-container>
</template>

<script>

import { format } from 'date-fns';
import listProjects from '../components/list-projects';

async function created() {
	this.$store.dispatch('barProgress', true);
	this.show = true;
	const urlProjects = 'projects-token';
	const responseProjects = await this.$http.get(urlProjects);
	this.projects = responseProjects.data.map((project) => {
		const newProject = { ...project };
		newProject.milestoneDateStart = format(newProject.milestoneDateStart, 'YYYY-MM-DD');
		newProject.milestoneDateEnd = format(newProject.milestoneDateEnd, 'YYYY-MM-DD');
		return newProject;
	});
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

function goToDashboard() {
	this.$router.push({ name: 'Home' });
}
export default {
	name: 'page-projects',
	data,
	created,
	methods: {
		goToActivity,
		goToDashboard,
	},
	components: {
		listProjects,
	},
};
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 !important;
	}

	.progress {
		margin-bottom: 60px;
		margin-top: -57px !important;
	}

	.container-search {
		background: map-get($colors, container-search);
		height: 57px;
		margin-bottom: 10px;
	}

	.search {
		background: map-get($colors, search);
		border-radius: 50px;
		box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.2);
		height: 30px;
		margin-top:13px;
	  padding: 2px 10px;
	}

	.background-container {
		background: map-get($colors, white) !important;
	}

</style>

