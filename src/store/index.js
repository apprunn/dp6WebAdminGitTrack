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
		token: localStorage.getItem('token'),
		sidebar: [],
		bar: false,
	},
	getters: {
		developers(state) {
			return state.developers;
		},

		token(state) {
			return state.token;
		},

		sidebar(state) {
			return state.sidebar;
		},

		bar(state) {
			return state.bar;
		},
	},
	actions: {
		async fetchDevelopers({ commit }) {
			commit('setBarProgress', true);
			const responseDeveloper = await instance.get('developer');
			commit('setDevelopers', responseDeveloper.data);
			commit('setBarProgress', false);
		},

		async fetchLogin({ commit }, payload) {
			commit('setToken', payload);
		},

		async fetchSidebar({ commit, state }) {
			const response = await instanceAcl.get('sidebar/git', {
				headers: { Authorization: `Bearer ${state.token}` },
			});
			commit('setSidebar', response.data.data);
		},

		barProgress({ commit }, payload) {
			commit('setBarProgress', payload);
		},
	},
	mutations: {
		setDevelopers(state, data) {
			Vue.set(state, 'developers', data);
		},

		setToken(state, data) {
			Vue.set(state, 'token', data);
		},

		setSidebar(state, data) {
			Vue.set(state, 'sidebar', data);
		},

		setBarProgress(state, data) {
			Vue.set(state, 'bar', data);
		},
	},
});

export default store;
