<template>
  <v-container>
		<v-form @submit.prevent="submit" ref="form" v-model="valid">
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
			color="green"
			type="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
	 <v-alert :value="true" type="error" color="red" v-if="showMessage">
      {{messageText}}
    </v-alert>
 </v-container>	
</template>

<script>

function data() {
	return {
		valid: true,
		message: false,
		messageText: '',
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

function showMessage() {
	return this.messageText.length > 0;
}

function submit() {
	const url = 'authenticate';
	this.$http
		.post(url, {
			email: this.email,
			password: this.password,
			codeApp: 'git',
			tokenDevice: '',
		})
		.then((response) => {
			this.messageText = '';
			this.valid = false;
			localStorage.setItem('token', response.data.token);
		})
		.catch((error) => {
			this.valid = true;
			if (error.response.status === 405) {
				this.messageText = error.response.data.message;
			} else {
				this.messageText = error.response.data.email[0];
			}
		});
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
	computed: {
		showMessage,
	},
};
</script>
