<template>
  <v-layout>
		<v-container class="container-project">
			<h4 class="title-card color-blue padding">{{gitName}}</h4>
			<div>
				<ul class="padding ul-project">
				<li class="list">
          <span v-html="list"></span>
				</li>
			</ul>
				<div class="container-details  padding">
					<p class="week-card">Semana: {{milestoneDateStart}} al {{milestoneDateEnd}}</p>
					<p class="week-card">Total de Horas Generadas</p>
					<v-icon color="green">timer</v-icon>
					<span class="time-card">{{activityHours}}/{{milestoneHours}} Hrs.</span>
				</div>
				<div class="container-button">
					<v-btn class="button btn-green"  @click="goToDashboard">Dashboard</v-btn>
					<v-btn class="button btn-orange"  @click="goToActivity" :data-id="id" >Actividades</v-btn>
				</div>
			</div>	
		</v-container>	
  </v-layout>
</template>

<script>

function goToActivity() {
	this.$emit('goToActivity', this.id);
}

function goToDashboard() {
	this.$emit('goToDashboard');
}

export default {
	name: 'list-projects',
	props: {
		gitName: {
			type: String,
		},
		activityHours: {
			type: Number,
		},
		milestoneHours: {
			type: Number,
		},
		id: {
			type: Number,
		},
		list: {
			type: String,
		},
		milestoneDateStart: {
			type: String,
		},
		milestoneDateEnd: {
			type: String,
		},
	},
	methods: {
		goToActivity,
		goToDashboard,
	},
};
</script>

<style lang="scss" scoped>
	.container-project {
		background: map-get($colors, white);
		margin: 10px;
		min-height: 215px;
		outline: 1px solid map-get($colors, header-blue);	
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
		min-height: 95px;
		width: 50%;
	}

	.container-details {
		border-left: 1px solid #dae2ea;
		display:inline-block;
		position: absolute;
		width: 45%;
	}

	.container-button {
		background: map-get($colors, container-color);
		height: 48px;
		margin-top:50px;
		text-align: center;
	}

	.list {
		color: map-get($colors, color-letter);
		white-space: pre-line;
	}

</style>



