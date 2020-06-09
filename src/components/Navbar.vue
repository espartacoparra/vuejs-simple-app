<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <router-link to="/">
          <b-navbar-brand>Home</b-navbar-brand>
        </router-link>
        <router-link to="/about">
          <b-navbar-brand>About</b-navbar-brand>
        </router-link>
        <router-link to="/charts">
          <b-navbar-brand>Charts</b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style >
.greenWords {
  color: #42b983;
}
</style>