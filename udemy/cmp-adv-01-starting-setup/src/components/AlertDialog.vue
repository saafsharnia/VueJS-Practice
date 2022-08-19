<template>
<dialog open>
  <slot class="dialog"></slot>
</dialog>
</template>

<script>
export default {
  name: "AlertDialog"
}
</script>

<style scoped>
.dialog {
  border: 2px solid red;
}
</style>