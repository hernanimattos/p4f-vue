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
        posts: [],
        imgs: [],
        loading: false
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
        },
        setImages(state, payload) {
          state.imgs = payload;
        },
        setLoading(state, payload) {
          state.loading = payload;
        }
      },
      actions: {
        async getUsers({ commit }) {
          commit('setLoading', true);

          return Http.get('/users').then(res => {
            const { data } = res || {};

            commit('setUsers', data);
            commit('setLoading', false);

            return Promise.resolve(data);
          });
        },
        getUser({ commit, state }, user) {
          if (state.user.name === user.name) return;
          commit('setUser', user);
        },
        async getPostsByUserId({ commit }, userId) {
          commit('setLoading', true);

          return Http.get(`/posts?userId=${userId}`).then(res => {
            const { data } = res;
            commit('setLoading', false);
            commit('setPosts', data);
          });
        },
        async getImagesByUserId({ commit }, id) {
          commit('setLoading', true);

          return Http.get(`/photos?albumId=${id}`).then(res => {
            const { data } = res;
            commit('setLoading', false);
            commit('setImages', data);
          });
        }
      }
    }
  }
});
