import Vue from 'vue';
import Vuex from 'vuex';
import Http from '../http/provider';
// import Http from '../http/provider';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main: {
      namespaced: true,
      state: {
        users: [],
        user: {}
      },
      mutations: {
        setUsers(state, payload) {
          state.users = payload;
        },
        setUser(state, payload) {
          state.user = payload;
        }
      },
      actions: {
        getUsers({ commit }) {
          return Http.get('/users').then(res => {
            const { data } = res || {};

            return Promise.resolve(data);
          });
        },
        getUser({ commit, state }, user) {
          if (state.user.name === user.name) return;
          console.log(user);
          commit('setUser', user);
        }
      }
    }
  }
});
