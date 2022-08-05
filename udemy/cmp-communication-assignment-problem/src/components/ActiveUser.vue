<template>
  <section>
    <h2>
      {{username}}
    </h2>
    <h3>
      {{age}} Years old
    </h3>
  </section>
</template>

<script>
export default {
  name: "ActiveUser",
  props: {
    username: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  // data() {
  //   return {
  //     username: 'sa',
  //     age: 10
  //   }
  // }
}
</script>

<style scoped>

</style>