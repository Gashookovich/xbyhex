<template>
  <div class="tagline">
    <div class="tagline__line"></div>
    <div class="tagline__text">ты можешь изменить мир, стоит только начать менять свой внутренний</div>
    <div class="tagline__line"></div>
  </div>
</template>

<script>
export default {
  name: 'tagline-component',
}
</script>

<style scoped>
.tagline {
  background-color: #f5eded;
  padding: 20px 20px;
  width: 100%;
  font-family: Century Gothic, sans-serif;
  line-height: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tagline__line {
  width: 10%;
  border-bottom: 1px solid black;
}
.tagline__text {
  width: 60%;
  font-size: 35px;
  font-weight: lighter;
  padding-bottom: 50px;
  padding-top: 45px;
}
</style>