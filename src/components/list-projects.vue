<template>
  <v-layout>
    <!-- <v-list-tile-content class="container-project">
      <v-list-tile-title  @click="goToActivity" :data-id="id" class="title-component">{{gitName}}</v-list-tile-title>
		  <v-list-tile-sub-title>Activity Hours: {{activityHours}} h</v-list-tile-sub-title>
			<v-list-tile-sub-title>Milestone Hours: {{milestoneHours}} h</v-list-tile-sub-title>
		</v-list-tile-content> -->
		<v-container class="container-project">
			<h4 class="title-card color-blue padding">{{gitName}}</h4>
			<div>
				<ul class="padding ul-project">
				<li>GDS</li>
				<li>Clerkin</li>
				<li>FeddBackin</li>
			</ul>
			<div class="container-details  padding">
				<p class="week-card">Semana: 04/07 al 09/07</p>
				<p class="week-card">Total de Horas Generadas</p>
				<v-icon color="green">timer</v-icon>
				<span class="time-card">80.75/120 Hrs.</span>
			</div>
			</div>	
		</v-container>	
  </v-layout>
</template>

<script>

function goToActivity() {
	this.$emit('goToActivity', this.id);
}

export default {
	name: 'list-projects',
	props: {
		gitName: {
			type: String,
		},
		activityHours: {
			type: Number,
			default: 198,
		},
		milestoneHours: {
			type: Number,
		},
		id: {
			type: Number,
		},
	},
	methods: {
		goToActivity,
	},
};
</script>

<style lang="scss" scoped>
	.container-project {
		height: 202px;
		outline: 1px solid red;
		margin: 10px;
		padding: 0px;
	}

	.color-blue {
		color:map-get($colors, header-blue);
	}

	.padding {
		padding: 10px;
	}

  li {
		color: map-get($colors, color-letter);
		font-family: 'D-DIN';		
		font-size: 12px;
		list-style: none;
	}

	.ul-project {
		display: inline-block;
		width: 50%;
	}

	.container-details {
		display:inline-block;
		width: 45%;
		position: absolute;
		border-left: 1px solid #dae2ea;
	}

</style>



