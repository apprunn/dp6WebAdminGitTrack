import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

const instance = axios.create({
	baseURL: process.env.GIT_URL,
	headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
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

		token(state) {
			return state.token;
		},
	},
	actions: {
		async fetchDevelopers({ commit }) {
			const responseDeveloper = await instance.get('developer');
			commit('setDevelopers', responseDeveloper.data);
		},

		async fetchLogin({ commit }, payload) {
			commit('setToken', payload);
		},
	},
	mutations: {
		setDevelopers(state, data) {
			Vue.set(state, 'developers', data);
		},

		setToken(state, data) {
			Vue.set(state, 'token', data);
		},
	},
});

export default store;
