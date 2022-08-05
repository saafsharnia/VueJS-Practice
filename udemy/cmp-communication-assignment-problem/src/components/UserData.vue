<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>Username</label>
        <input type="text" v-model="username"/>
      </div>
      <div>
        <label>age</label>
        <input type="number" v-model="age"/>
      </div>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserData",
  emits: ['submit-user'],
  data() {
    return {
      username: '',
      age: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('submit-user', this.username, this.age)
    }
  }
}
</script>

<style scoped>

</style>