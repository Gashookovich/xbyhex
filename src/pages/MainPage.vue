<template>
  <div class="main-page">
    <div class="main-page__head1">
      <div class="main-page__head1-header">я Мария - клинический психолог</div>
      <div class="main-page__head1-body">занимаюсь психотерапией расстройств и синдромов,
        а также - исцеляю души с помощью <strong>психокоррекции</strong></div>
      <div class="main-page__head1-footer"><strong>проще говоря:</strong> <br>
        помогаю людям жить свою лучшую жизнь <br> прямо <strong>«здесь и сейчас»</strong></div>
      <button class="btn">
        <a
          href="https://drive.google.com/drive/folders/1ZmBXMDyTZpAYdDEAOk7izfhxNhgirJCU?usp=sharing"
          style="color: black; text-decoration: none;"
          target="_blank"
        >
          ПОДАРОК ОТ МЕНЯ
        </a>
      </button>
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
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: left;
  margin-left: 7%;
}
.main-page__head2 {
  width: 47%;
}
img {
  width: 100%;
  margin-top: 0;
}
.main-page__head1-header {
  width: 100%;
  height: 27%;
  font-size: 50px;
  margin-top: 15%;
}
.main-page__head1-body {
  width: 100%;
  height: 17%;
  font-size: 20px;
  margin-top: 0;
}
.main-page__head1-footer {
  width: 100%;
  height: 18%;
  font-size: 20px;
}
.btn {
  background-color: #ffffff;
  color: black;
  width: 45%;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 18px;
  text-align: center;
  margin-right: 40%;
}
.btn:hover {
  background-color: #7a0202;
  color: #ffffff;
}
</style>