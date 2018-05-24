<template>
  <v-container>
		<v-form ref="form" v-model="valid">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
		<v-text-field
      v-model="password"
			type ="password"
      label="Password"
			 :rules="passwordRules"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
			color="green"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
 </v-container>	
</template>

<script>

function data() {
	return {
		valid: true,
		name: '',
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
		],
		password: '',
		passwordRules: [
			v => !!v || 'Password is required',
		],
	};
}

function submit() {
	alert('hola');
}

function clear() {
	this.$refs.form.reset();
}


export default {
	data,
	methods: {
		submit,
		clear,
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