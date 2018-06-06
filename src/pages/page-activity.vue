<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-list-tile v-for="activity in activities" :key="activity.id" class="container">
					<div>
						<p>{{activity.gitName}}</p>
					</div>
				</v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>

	function data() {
		return {
			activities: [],
		};
	}

	async function created() {
		this.$store.dispatch('barProgress', true);
		const urlActivity = `activities/milestone/${this.$route.params.id}`;
		const responseActivity = await this.$http.get(urlActivity);
		this.activities = responseActivity.data;
		this.$store.dispatch('barProgress', false);
	}

	export default {
		name: 'page-activity',
		created,
		data,
	};

</script>