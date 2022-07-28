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
@media screen and (max-width: 1440px) and (min-width: 960px) {
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
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .tagline {
    background-color: #f5eded;
    padding: 20px 10px;
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
    font-size: 22px;
    font-weight: lighter;
    padding-bottom: 40px;
    padding-top: 35px;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .tagline {
    background-color: #f5eded;
    padding: 20px 10px;
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
    font-size: 17px;
    font-weight: lighter;
    padding-bottom: 30px;
    padding-top: 25px;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .tagline {
    background-color: #f5eded;
    padding: 20px 10px;
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
    font-size: 13px;
    font-weight: lighter;
    padding-bottom: 20px;
    padding-top: 15px;
  }
}
</style>