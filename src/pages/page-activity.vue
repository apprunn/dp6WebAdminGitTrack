<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
				<v-tabs
					slider-color="green"
					right
				>
					<v-tab v-for="item in items" :key="item">
						{{item}}
					</v-tab>
					<v-tabs-items>
						<v-tab-item v-for="(item, index) in items" :key="item">
							<v-layout v-for="(activity, element) in activities" :key="activity.id" v-if="showActivity(index)">
								<v-flex xs12>
									<list-activity
											:git-name="activity.gitName"
											:git-repo-name="activity.gitRepoName"
											:url-image="activity.assignees[0].avatar_url"
											:time-estimated="activity.timeEstimated"
											v-on:go-to-edit="goToEdit"
											:class="background(element)"
									></list-activity>
								</v-flex>
							</v-layout>
						</v-tab-item>
					</v-tabs-items>		
				</v-tabs>
				<div class="container-back">
					<v-btn  @click="$router.go(-1)" class="button btn-red">Atras</v-btn>
				</div>
    </v-flex>
  </v-layout>
</template>

<script>

	import listActivity from '../components/list-activity';

	function data() {
		return {
			activities: [],
			items: ['Sin Asignar', 'Asignadas'],
		};
	}

	async function created() {
		this.$store.dispatch('barProgress', true);
		const urlActivity = `activities/milestone/${this.$route.params.id}?&page=1&limit=10`;
		const responseActivity = await this.$http.get(urlActivity);
		this.activities = responseActivity.data.results;
		this.activities = responseActivity.data.results.map((element) => {
			const newActivities = { ...element };
			newActivities.assignees = JSON.parse(newActivities.assignees);
			return newActivities;
		});
		this.$store.dispatch('barProgress', false);
	}

	function showActivity(value) {
		return value === 1;
	}

	function goToEdit() {
		this.$router.push({ name: 'edit' });
	}

	function background(index) {
		let value;
		if (index % 2 === 0) {
			value = 'back-odd ';
		}
		return value;
	}

	export default {
		name: 'page-activity',
		components: {
			listActivity,
		},
		methods: {
			showActivity,
			goToEdit,
			background,
		},
		created,
		data,
	};

</script>

<style lang="scss" scoped>
 .back-odd {
	 background: map-get($colors, container-color);
 }

 .container-back {
	  background: map-get($colors, container-color);
	 	text-align: center;
 }

</style>
