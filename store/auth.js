import { auth } from '@/services/fireinit.js';
import _ from 'lodash';

export const state = () => ({
  user: JSON.parse(localStorage.getItem('user')),
  intended: ''
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  },

  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },

  setIntended(state, intended) {
    state.intended = intended;
  }
};

export const actions = {
  autoSignIn({ commit }, payload) {
    commit('setUser', payload);
  },

  async userLogin({ commit }, { email, password }) {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      console.debug('User signed in');
      commit('setUser', _.cloneDeep(user));
      return true;
    } catch (err) {
      console.error(`Sign in failed: ${err}`);
      commit('setUser', null);
      throw err;
    }
  }
};

export const getters = {
  user: state => {
    return state.user;
  },

  intended: state => {
    return state.intended;
  }
};
