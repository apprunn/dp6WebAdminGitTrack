<template>
	<div class="hello">
		<h1>holaa</h1>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			msg: 'Welcome to Your Vue.js PWA',
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
	color: map-get($colors, red);
	font-size: em(32);
}
</style>
