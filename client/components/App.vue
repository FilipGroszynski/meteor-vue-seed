<template name="footer">
  <v-app light>
    <v-toolbar dark>
      <v-toolbar-title v-text="title" />
      <div class="flex-grow-1" />
      <v-toolbar-items>
        <v-btn text>
          Link 1
        </v-btn>
        <v-btn text>
          Link 2
        </v-btn>
        <v-btn text>
          Link 3
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <mycontent />
  </v-app>
</template>

<script>
import store from '../store';
import mycontent from './MyContent.vue';

export default {
  components: {
    mycontent,
  },
  computed: {
    title: () => store.state.title,
  },
};
</script>
