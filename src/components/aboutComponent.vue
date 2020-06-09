<template>
  <div>
    <div class="container">
      <p />
      <div class="mb-4">
        <p>Nuestro Equipo:</p>
        <span v-for="userArray in userList" :key="userArray.id">
          <b-avatar v-for="user in userArray" :key="user.id" :src="user.avatar"></b-avatar>
        </span>
      </div>
      <p>Información del Equipo:</p>
      <b-card-group v-for="(item, index) in userList" :key="index" class="mb-2" deck>
        <b-card
          v-for="(user, index) in item"
          :key="index"
          :title="user.first_name +' '+ user.last_name"
          :img-src="user.avatar"
          img-alt="Image"
          img-top
        >
          <b-card-text>Email: {{user.email}}</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  props: {
    users: Array,
    getUSers: Object
  },
  watch: {
    users: function() {
      this.convertArray();
    }
  },
  created() {
    this.convertArray();
  },
  data() {
    return {
      userList: []
    };
  },
  methods: {
    convertArray() {
      let total = [];
      let partial = [];
      let count = 1;
      this.users.map(user => {
        if (count <= 3) {
          partial.push(user);
          count++;
        } else {
          count = 1;
          total.push(partial);
          partial = [];
          partial.push(user);
        }
      });
      if (count <= 3) {
        total.push(partial);
      }
      this.userList = total;
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>