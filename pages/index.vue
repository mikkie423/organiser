<template>
  <p>
    This is the wrong index page,
    <nuxt-link to="/notes/">click here for the right one</nuxt-link>
  </p>
</template>

<script>
export default {
  middleware: 'auth',
  components: {},
  created: function() {
    this.$router.push('/notes');
  }
};
</script>

<style></style>
