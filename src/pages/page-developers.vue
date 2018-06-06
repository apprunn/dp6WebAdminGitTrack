<template>
		<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0>
			<v-flex xs12 sm6 offset-sm3>
					<v-list-tile v-for="developer in developers" :key="developer.userId">
						<v-list-tile-avatar>
							<img :src="developer.avatarUrl">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{developer.developerName}}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
			</v-flex>
		</v-container>
</template>
<script>

function created() {
	this.$store.dispatch('fetchDevelopers');
}

function developers() {
	return this.$store.getters.developers;
}

export default {
	name: 'page-developers',
	created,
	computed: {
		developers,
	},
};
</script>

<style lang="scss" scoped>

	.progress {
		margin-top: -57px !important;
    margin-bottom: 60px;
	}
</style>
