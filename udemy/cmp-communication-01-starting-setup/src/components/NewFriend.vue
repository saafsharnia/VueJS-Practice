<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="newContact.name"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="newContact.phone"/>
    </div>
    <div>
      <label>email</label>
      <input type="email" v-model="newContact.email"/>
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ['add-contact'],
  data() {
    return {
      newContact: {
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    submitData() {
      this.$emit('add-contact', this.newContact.name, this.newContact.phone, this.newContact.email)
      this.newContact = {
        name: '',
        phone: '',
        email: ''
      }
    }
  }
}
</script>

<style scoped>

</style>