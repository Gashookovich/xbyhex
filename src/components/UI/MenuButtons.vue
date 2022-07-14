<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'menu-buttons',
}
</script>

<style scoped>
.btn {
  background-color: black;
  color: #ffffff;
  width: 9%;
  font-size: 15px;
  cursor: pointer;
}
.btn:hover {
  color: #7a0202;
}
</style>