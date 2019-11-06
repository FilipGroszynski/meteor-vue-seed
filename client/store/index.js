import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    title: 'My Company Name',
    items: [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
    ],
  },
  mutations: {
    add(store, payload = 1) {
      store.count += payload;
    },
    subtract(state, payload = 1) {
      state.count -= payload;
    },
  },
  actions: {
    addThreeAsync({ commit }) {
      setTimeout(() => commit('add', 3), 3000);
    },
  },
});
