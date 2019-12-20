<template>
  <div class="container">
    <div class="d-flex mb-3" :class="{'flex-row': isBigScreen, 'flex-column justify-content-center': !isBigScreen}">
      <div class="mt-5 p-1">
        <img :src="src" class="img-fluid rounded mx-auto d-block" alt="profile pic">
      </div>
      <div class="mt-5 d-flex flex-column p-1">
        <div class="p-1">
            <h4> {{ name }}</h4>
        </div>
        <div class="my-2"></div>
        <div class="p-1">
          <span> {{ !bio ? "-" : bio }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    src: String,
    name: String,
    bio: String,
  },
  data() {
    return {
      isBigScreen: false,
    };
  },
  methods: {
    onResize() {
      this.isBigScreen = window.innerWidth >= 991;
    },
  },
  created() {
    this.isBigScreen = window.innerWidth >= 991;
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>

</style>
