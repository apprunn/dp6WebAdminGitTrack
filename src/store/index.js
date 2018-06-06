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
	headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

const store = new Vuex.Store({
	state: {
		developers: [],
		token: null,
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
			commit('setbarProgress', true);
			const responseDeveloper = await instance.get('developer');
			commit('setDevelopers', responseDeveloper.data);
			commit('setbarProgress', false);
		},

		async fetchLogin({ commit }, payload) {
			commit('setToken', payload);
		},

		async fetchSidebar({ commit }) {
			const response = await instanceAcl.get('sidebar/git');
			commit('setSidebar', response.data.data);
		},

		barProgress({ commit }, payload) {
			commit('setbarProgress', payload);
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

		setbarProgress(state, data) {
			Vue.set(state, 'bar', data);
		},
	},
});

export default store;
