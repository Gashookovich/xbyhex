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
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .btn {
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    font-size: 60%;
  }
  .btn:hover {
    color: #7a0202;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .btn {
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    font-size: 50%;
  }
  .btn:hover {
    color: #7a0202;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .btn {
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    font-size: 50%;
  }
  .btn:hover {
    color: #7a0202;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .btn {
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    font-size: 10px;
    padding-left: 7px;
  }
  .btn:hover {
    color: #7a0202;
  }
}
</style>