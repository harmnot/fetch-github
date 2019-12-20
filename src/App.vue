<template>
  <div id="app">
    <div class="text-center" @click="switchThis()">
      <router-link to="/" v-if="show" style="color: #3a35e0; font-size: 30px">Your GitHub</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Eventbus from './EventBus';

export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    switchThis() {
      this.show = false;
    },
  },
  created() {
    Eventbus.$on('show', (payload) => {
      this.show = payload;
    });
  },
};
</script>

<style lang="stylus">
  #app
    font-family: 'Karla', sans-serif;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(28,142,210,1) 0%, rgba(113,192,244,1) 47.3%, rgba(139,238,230,1) 88.4%)
  .input-field
    width: 100%
    padding: 9px
    outline: none
    border-radius 20px
  input[type=text],input[type=email], textarea
    -webkit-transition: all 0.30s ease-in-out
    -moz-transition: all 0.30s ease-in-out
    -ms-transition: all 0.30s ease-in-out
    -o-transition: all 0.30s ease-in-out
    outline: none
    border: 1px solid #DDDDDD
  input[type=text]:focus, input[type=email]:focus, textarea:focus
    box-shadow: 0 0 5px #9992ff
    border: 1px solid #9992ff
  .vertical-center
    margin: 0
    position: absolute
    left: 50%
    top: 40%
    -ms-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)
</style>
