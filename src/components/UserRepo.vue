<template>
  <div class="container">
    <div class="d-flex flex-column p-4" style="border-top: 1px solid black">
      <div class="p-0 m-0" style="cursor: pointer">
         <h4 style="color: #064cff"> <a @click="goToRepo(repo)"> {{ repo }} </a> </h4>
      </div>
      <div class="p-0">
        {{ !description ? " -" : description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Userepo',
  props: {
    owner: String,
    repo: String,
    description: String,
  },
  methods: {
    goToRepo(name) {
      this.$router.push(`/${this.owner}/repo/${name}`);
    },
  },
};
</script>

<style scoped>

</style>
