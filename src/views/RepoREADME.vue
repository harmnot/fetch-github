<template>
  <div class="container p-3" style="min-height: 100vh">
    <div>
      <h2> {{ $route.params.username }} -  <span style="font-style:italic;"> {{ $route.params.repo }} </span></h2>
    </div>
    <div class="d-flex flex-column">
      <div class="p-1 mx-auto mt-5">
        <span> README.md </span>
      </div>
      <div class="p-1">
        <div v-if="readme !== 'ERROR'" v-html="readme"></div>
        <div v-else-if="readme === '' "> no data </div>
      </div>
    </div>
  </div>
</template>

<script>
import Eventbus from '../EventBus';

export default {
  name: 'RepoREADME',
  data() {
    return {
      readme: '',
    };
  },
  methods: {
    async fetchUserRepo() {
      try {
        const { data } = await this.$axios.get(`/getrepo/${this.$route.params.username}/${this.$route.params.repo}`);
        this.readme = data;
      } catch (error) {
        this.readme = '';
      }
    },
  },
  created() {
    this.fetchUserRepo();
    Eventbus.$emit('show', true);
  },
};
</script>

<style scoped>

</style>
