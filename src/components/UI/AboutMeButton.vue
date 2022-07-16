<template>
  <div>
    <button class="about-me__btn">
      <a
          class="about-me__btn-a"
          href="https://sites.google.com/view/xbyhex16?hl=en"
          target="_blank"
      >
        «16 критериев психического здоровья»
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'about-me-button',
}
</script>

<style scoped>
.about-me__btn {
  height: 60px;
  margin: 50px 0;
  border-radius: 30px;
  font-size: 16px;
  background-color: black;
  color: #ffffff;
  cursor: pointer;
}
.about-me__btn:hover {
  background-color: #ffffff;
}
.about-me__btn-a {
  color: #ffffff;
  text-decoration: none;
}
.about-me__btn-a:hover {
  color: black;

}
</style>