<template>
  <div class="home text-center" id="h">
      <div class="d-flex flex-column vertical-center">
        <div class="p-2 mb-2">
          <h3 style="font-weight: 700;"> Your GitHub </h3>
        </div>
        <div class="my-2" v-if="error">
          <span> please type something to search </span>
        </div>
        <div style="min-width: 35vw">
          <input class="input-field" type="text" @keyup.enter="searchUser()" v-model="search">
        </div>
        <div class="p-2 mt-4">
          <button type="button" class="btn btn-primary" style="width: 6.3rem" @click="searchUser()">Search</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      search: '',
      error: false,
    };
  },
  methods: {
    searchUser() {
      if (this.search === '') {
        this.error = true;
      } else {
        this.$router.push(`/${this.search}`);
      }
    },
  },
};
</script>
<style lang="stylus">
 #h
   min-height: 100vh
</style>
