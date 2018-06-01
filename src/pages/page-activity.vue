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
		const urlActivity = `activities/milestone/${this.$route.params.id}`;
		const token = localStorage.getItem('token');
		const responseActivity = await this.$http.get(urlActivity, {
			headers: { Authorization: `Bearer ${token}` },
		});
		this.activities = responseActivity.data;
	}

	export default {
		name: 'page-activity',
		created,
		data,
	};

</script>