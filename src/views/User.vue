<template>
  <div class="user">
    <div v-if="user !== 'ERROR'">
      <Profile :src="user.avatar_url"  :name="user.login" :bio="user.bio"/>
      <div class="container">
        <h2 class="my-5"> Repositories: </h2>
        <Userepo v-for="( data, index ) in userRepo"
                 :key="index"
                 :description="data.description"
                 :owner="$route.params.username"
                 :repo="data.name"
        />
      </div>
    </div>
    <div v-else-if="!user" class="container  text-center vertical-center">
      <h3> ooooppps user not found ! </h3>
    </div>
    <div v-else class="container text-center vertical-center">
      <h3> Sorry, no data! </h3>
    </div>
  </div>
</template>

<script>
import Profile from '../components/Profile.vue';
import Userepo from '../components/UserRepo.vue';
import Eventbus from '../EventBus';

export default {
  name: 'User',
  components: {
    Userepo,
    Profile,
  },
  data() {
    return {
      user: null,
      userRepo: null,
    };
  },
  methods: {
    async getProfileUser() {
      try {
        const { data } = await this.$axios.get(`/getuser/${this.$route.params.username}`);
        this.user = data;
      } catch (error) {
        this.user = 'ERROR';
      }
    },
    async getRepoUser() {
      try {
        const { data } = await this.$axios.get(`/getallrepo/${this.$route.params.username}`);
        this.userRepo = data;
      } catch (error) {
        this.userRepo = 'ERROR';
      }
    },
  },
  created() {
    this.getProfileUser();
    this.getRepoUser();
    Eventbus.$emit('show', true);
  },
};
</script>

<style scoped lang="stylus">
  .user
    min-height: 100vh
</style>
