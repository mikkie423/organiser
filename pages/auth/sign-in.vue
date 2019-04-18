<template>
  <form action="/" @submit.prevent="submit">
    Email:
    <input v-model="email" type="text" name="email" />
    Password:
    <input v-model="password" type="password" name="password" />

    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch('auth/userLogin', {
          email: this.email,
          password: this.password
        });
        this.$router.push(this.$store.getters['auth/intended'] || '/');
      } catch (err) {
        alert(err);
        console.error(err);
      }
    }
  }
};
</script>

<style></style>
