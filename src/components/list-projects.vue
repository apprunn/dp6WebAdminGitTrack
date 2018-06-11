<template>
  <v-layout>
    <v-list-tile-content>
      <v-list-tile-title  @click="goToActivity" :data-id="id">{{gitName}}</v-list-tile-title>
		  <v-list-tile-sub-title>Activity Hours: {{activityHours}} h</v-list-tile-sub-title>
			<v-list-tile-sub-title>Milestone Hours: {{milestoneHours}} h</v-list-tile-sub-title>
		</v-list-tile-content>
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


