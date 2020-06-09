<template>
  <div>
    <AboutComponent :users="users"></AboutComponent>
  </div>
</template>

<script>
import RequestService from "../services/requestService";
import AboutComponent from "../components/aboutComponent";
export default {
  name: "About",
  components: {
    AboutComponent
  },
  created() {
    this.getUsers();
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUsers() {
      this.users = await RequestService.getUsers();
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>