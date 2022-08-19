<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal">Add Goal</button>
  <teleport to="body">
    <alert-dialog v-if="openDialog">
      <h2>Input is invalid</h2>
      <p>Please enter at least one character</p>
      <button @click="toggleDialog(false)">Ok</button>
    </alert-dialog>
  </teleport>
</template>

<script>
import AlertDialog from "@/components/AlertDialog";

export default {
  name: "ManageGoals",
  components: [
    AlertDialog
  ],
  data() {
    return {
      openDialog: false
    }
  },
  methods: {
    toggleDialog(newSate) {
      this.openDialog = newSate
    },
    setGoal() {
      if(this.$refs.goal.value === "") {
        this.toggleDialog(true)
      }
    }
  }
}
</script>

<style scoped>

</style>