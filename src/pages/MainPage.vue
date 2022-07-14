<template>
  <div class="main-page">
    <div class="main-page__head1">
      <div>я Мария - клинический психолог</div>
      <div>занимаюсь психотерапией расстройств и синдромов,
        а также - исцеляю души с помощью психокоррекции</div>
      <div>проще говоря: <br>
        помогаю людям жить свою лучшую жизнь
        прямо «здесь и сейчас»</div>
    </div>
    <div class="main-page__head2">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
import image from "@/img/header.png";

export default {
  name: 'main-page',
  data() {
    return {
      image: image,
    }
  },
}
</script>

<style scoped>
.main-page {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
}
.main-page__head1 {
  width: 45%;
  color: #ffffff;
}
.main-page__head2 {
  width: 45%;
}
img {
  width: 100%;
  margin-top: 0;
}
</style>