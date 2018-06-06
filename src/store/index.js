import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

const instance = axios.create({
	baseURL: process.env.GIT_URL,
	headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

const instanceAcl = axios.create({
	baseURL: process.env.ACL_URL,
});

const store = new Vuex.Store({
	state: {
		developers: [],
		token: null,
	},
	getters: {
		developers(state) {
			return state.developers;
		},
	},
	actions: {
		async fetchDevelopers({ commit }) {
			const responseDeveloper = await instance.get('developer');
			commit('setDevelopers', responseDeveloper.data);
		},

		async fetchLogin({ commit }, payload) {
			try {
				const response = await instanceAcl.post('authenticate', {
					email: payload.email,
					password: payload.password,
					codeApp: 'git',
					tokenDevice: '',
				});
				this.$router.push({ name: 'Home' });
				commit('setLogin', response.data.token);
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		setDevelopers(state, data) {
			Vue.set(state, 'developers', data);
		},
		setLogin(state, data) {
			Vue.set(state, 'token', data);
		},
	},
});

export default store;
