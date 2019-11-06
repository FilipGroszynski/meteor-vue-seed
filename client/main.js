import { Meteor } from 'meteor/meteor';

import './main.html';

import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './components/App.vue';
import store from './store';

Vue.use(Vuetify);

Meteor.startup((() => new Vue({
  el: '#app',
  store,
  vuetify: new Vuetify(),
  components: {
    App,
  },
  render: (h) => h(App),
})
));
