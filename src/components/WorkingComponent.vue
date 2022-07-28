<template>
  <div class="working" ref="working-comp">
    <h1>С ЧЕМ Я РАБОТАЮ</h1>
    <div class="working__content">
      <div class="working__content-block">
        <div>
          <img :src="image1" />
          <div class="working__content-text">самоопределение</div>
        </div>
        <div>
          <img :src="image3"  />
          <div class="working__content-text">самореализация</div>
        </div>
      </div>
      <div class="working__content-block">
        <div>
          <img :src="image5" />
          <div class="working__content-text">отношения</div>
        </div>
        <div>
          <img :src="image6" />
          <div class="working__content-text">трудоголизм</div>
        </div>
      </div>
      <div class="working__content-block">
        <div>
          <img :src="image2" />
          <div class="working__content-text">финансовое положение</div>
        </div>
        <div>
          <img :src="image4" />
          <div class="working__content-text">тревожно-депрессивная симптоматика</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/img/autism.png";
import image4 from "@/img/sad.png";
import image2 from "@/img/budget.png";
import image5 from "@/img/dynamics.png";
import image3 from "@/img/yinyang.png";
import image6 from "@/img/struggle.png";

export default {
  name: 'working-component',
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .working {
    width: 100%;
    padding: 20px 10px;
    text-align: center;
    background-color: #f5eded;
    font-family: Century Gothic, sans-serif;
  }
  h1 {
    font-size: 46px;
    font-weight: lighter;
  }
  img {
    width: 20%;
    padding-top: 70px;
  }
  .working__content {
    display: flex;
    justify-content: space-between;
  }
  .working__content-block {
    padding-left: 30px;
  }
  .working__content-text {
    font-size: 30px;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .working {
    width: 100%;
    padding: 20px 10px;
    text-align: center;
    background-color: #f5eded;
    font-family: Century Gothic, sans-serif;
  }
  h1 {
    font-size: 38px;
    font-weight: lighter;
  }
  img {
    width: 20%;
    padding-top: 50px;
  }
  .working__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .working__content-block {
    lign-items: center;
    display: flex;
    flex-direction: row;
  }
  .working__content-text {
    font-size: 22px;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .working {
    width: 100%;
    padding: 20px 10px;
    text-align: center;
    background-color: #f5eded;
    font-family: Century Gothic, sans-serif;
  }
  h1 {
    font-size: 32px;
    font-weight: lighter;
  }
  img {
    width: 20%;
    padding-top: 30px;
  }
  .working__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .working__content-block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .working__content-text {
    font-size: 17px;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .working {
    width: 100%;
    padding: 20px 10px;
    text-align: center;
    background-color: #f5eded;
    font-family: Century Gothic, sans-serif;
  }
  h1 {
    font-size: 25px;
    font-weight: lighter;
  }
  img {
    width: 20%;
    padding-top: 20px;
  }
  .working__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .working__content-block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .working__content-text {
    font-size: 13px;
  }
}
</style>