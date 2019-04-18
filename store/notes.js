import { store } from '@/services/fireinit.js';
import _ from 'lodash';
export const state = () => ({
  all: []
});

export const mutations = {
  add(state, note) {
    state.all.push(note);
  },

  setAll(state, notes) {
    state.all = _.cloneDeep(notes);
  },

  remove(state, { note }) {
    state.all.splice(state.all.indexOf(note), 1);
  }
};

export const actions = {
  autoSignIn({ commit }, payload) {
    commit('setUser', payload);
  },

  async fetchAll({ commit }) {
    const snapshot = await store.collection('notes').get();
    const notes = [];
    snapshot.forEach(doc => notes.push(doc.data()));
    commit('setAll', notes);
  },

  async create({ commit }, payload) {
    await store.collection('notes').add(payload);
    commit('add', payload);
  }
};

export const getters = {
  all: state => {
    return state.all;
  },
  pinned: state => {
    return state.all.filter(x => x.pinned);
  }
};
