<template>
	<layout-login>
		<v-container pa-0 class="full-width">
			<v-layout row wrap align-start class="height-4">
				<v-flex xs12 pa-0>
					<img :src="`${$s3Url}/header-bar.svg`"
						alt="Colors Bar" class="header-bar">
				</v-flex>
			</v-layout>
			<v-layout row wrap align-center
				justify-center
				class="login-container">
				<v-flex xs12 text-xs-center>
					<img :src="`${$s3Url}/logo-vertical.svg`"
						alt="Logo GitTrack"
						class="my-5">
					<v-form
						@submit.prevent="submit" 
						ref="form" 
						v-model="valid"
					>
						<v-text-field
							prepend-icon="account_circle"
							class="login-input white--text"
							v-model="email"
							:rules="emailRules"
							label="Usuario"
							required
							hide-details
						></v-text-field>
						<v-divider class="login-divider mt-3"></v-divider>
						<v-text-field
							prepend-icon="vpn_key"
							class="login-input"
							v-model="password"
							type ="password"
							label="Password"
							:rules="passwordRules"
							required
							hide-details
						></v-text-field>
						<v-btn
							:disabled="!valid"
							:loading="loading"
							type="submit"
							block
							class="login-btn green mt-5 mb-2"
						>
							Ingresar
						</v-btn>
						<v-btn
							@click="clear"
							class="login-btn warning mb-5"
							block
						>
							Ingresar con GitHub
						</v-btn>
						<router-link to="/" class="login-link">
							¿Olvidaste tu contraseña?
						</router-link>
					</v-form>
				</v-flex>
			</v-layout>
			<v-alert 
				:value="true" 
				type="error" 
				color="red" 
				v-if="showMessage"
			>
				{{messageText}}
			</v-alert>
		</v-container>
	</layout-login>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import layoutLogin from '@/layouts/layout-login';

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
		this.$store.dispatch('fetchLogin', response.data.token);
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('code-user', response.data.codeUser);
		this.$router.push({ name: 'Home' });
	} catch (error) {
		this.messageText = error.response.data.message;
	} finally {
		this.loading = false;
	}
}

function clear() {
	this.$refs.form.reset();
	this.messageText = '';
}

function validations() {
	return {
		email: {
			email,
			required,
		},
		password: {
			required,
		},
	};
}

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

export default {
	name: 'page-login',
	components: {
		layoutLogin,
	},
	computed: {
		showMessage,
	},
	data,
	methods: {
		submit,
		clear,
	},
	validations,
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

	.login {
  		&-container {
			background-image: url(https://s3.amazonaws.com/runtrack/login-banner.jpg);
			background-size: cover;
			height: calc(100vh - 4px);
			padding: 0 24px;
		}

		&-divider {
			background-color: map-get($colors, container-search);
			opacity: 0.7;
			height: 2px;
		}

		&-btn {
			background-color: transparent !important;
			border-radius: 13px;
			font-family: map-get($fonts, bold);
			height: 40px;
			letter-spacing: 1px;
			margin: 0 auto;
			max-width: 253px;
			text-transform: none;

			&.green {
				border: 1px solid map-get($colors, button-green);
				color: map-get($colors, button-green);
			}

			&.warning {
				border: 1px solid map-get($colors, button-orange);
				color: map-get($colors, button-orange);
			}
		}

		&-link {
			color: map-get($colors, white);
			font-size: 14px;
			text-decoration: none;
		}
	}

	.full-width {
		max-width: none;
	}

	.height-4 {
		height: 4px;
	}

	.header-bar {
		vertical-align: top;
		width: 100%;
	}
</style>