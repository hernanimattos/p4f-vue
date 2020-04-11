import Vue from 'vue';
import Vuex from 'vuex';
import Http from '../http/provider';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main: {
      namespaced: true,
      state: {
        users: [],
        user: {},
        posts: []
      },
      mutations: {
        setUsers(state, payload) {
          state.users = payload;
        },
        setUser(state, payload) {
          state.user = payload;
        },
        setPosts(state, payload) {
          state.posts = payload;
        }
      },
      actions: {
        async getUsers({ commit }) {
          return Http.get('/users').then(res => {
            const { data } = res || {};
            commit('setUsers', data);
            return Promise.resolve(data);
          });
        },
        getUser({ commit, state }, user) {
          if (state.user.name === user.name) return;
          commit('setUser', user);
        },
        async getPostsByUserId({ commit }, userId) {
          return Http.get(`/posts?userId=${userId}`).then(res => {
            const { data } = res;
            console.log(data, 'lklklkl');
            commit('setPosts', data);
            // return Promise.resolve(data);
          });
        }
      }
    }
  }
});
