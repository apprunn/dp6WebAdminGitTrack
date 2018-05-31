<template>
	<layout-login>
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
				:loading="loading"
				color="green"
				type="submit"
				class="white--text"
			>
				submit
			</v-btn>
			<v-btn @click="clear">clear</v-btn>
		</v-form>
		<v-alert :value="true" type="error" color="red" v-if="showMessage">
				{{messageText}}
			</v-alert>
	</v-container>
	</layout-login>
</template>

<script>

import layoutLogin from '@/layouts/layout-login';

function data() {
	return {
		loading: false,
		valid: true,
		loader: null,
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

async function submit() {
	this.loading = true;
	const url = 'authenticate';
	try {
		const response = await this.$httpAcl.post(url, {
			email: this.email,
			password: this.password,
			codeApp: 'git',
			tokenDevice: '',
		});
		this.messageText = '';
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('code-user', response.data.codeUser);
		this.$router.push({ name: 'Home' });
	} catch (error) {
		if (error.response.status === 405) {
			this.messageText = error.response.data.message;
		} else {
			this.messageText = error.response.data.email[0];
		}
	} finally {
		this.loading = false;
	}
}

function clear() {
	this.$refs.form.reset();
	this.messageText = '';
}


export default {
	data,
	components: {
		layoutLogin,
	},
	methods: {
		submit,
		clear,
	},
	computed: {
		showMessage,
	},
};
</script>
<style lang="scss" scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>