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
  <working-component />
  <AboutMeComponent />
  <AducationComponent />
  <TaglineComponent />
  <AddressComponent />
  <ReceptionComponent />
</template>

<script>
import image from "@/img/header.png";
import WorkingComponent from "@/components/WorkingComponent";
import AboutMeComponent from "@/components/AboutMeComponent";
import AducationComponent from "@/components/AducationComponent";
import TaglineComponent from "@/components/TaglineComponent";
import AddressComponent from "@/components/AddressComponent";
import ReceptionComponent from "@/components/ReceptionComponent";

export default {
  name: 'main-page',
  components: {
    ReceptionComponent,
    AddressComponent,
    TaglineComponent,
    WorkingComponent,
    AboutMeComponent,
    AducationComponent,
  },
  data() {
    return {
      image: image,
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .main-page {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    padding: 20px 0;
    font-family: Century Gothic, sans-serif;
  }
  .main-page__head1 {
    width: 45%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: start;
    line-height: 2;
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
    font-size: 50px;
    margin-top: 15%;
  }
  .main-page__head1-body {
    height: 17%;
    font-size: 20px;
    margin-top: 0;
  }
  .main-page__head1-footer {
    height: 18%;
    font-size: 20px;
  }
  .btn {
    background-color: #ffffff;
    color: black;
    padding: 15px 30px;
    margin-top: 30px;
    border-radius: 30px;
    font-size: 18px;
    text-align: center;
    margin-right: 40%;
  }
  .btn:hover {
    background-color: #7a0202;
    color: #ffffff;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .main-page {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    padding: 15px 0;
  }
  .main-page__head1 {
    width: 45%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    margin-left: 7%;
    line-height: 1.5;
  }
  .main-page__head2 {
    width: 47%;
  }
  img {
    width: 100%;
    margin-top: 0;
  }
  .main-page__head1-header {
    font-size: 44px;
  }
  .main-page__head1-body {
    height: 17%;
    font-size: 15px;
    margin-top: 10px;
  }
  .main-page__head1-footer {
    height: 18%;
    font-size: 15px;
    margin-top: 20px;
  }
  .btn {
    background-color: #ffffff;
    color: black;
    padding: 15px 30px;
    margin-top: 20px;
    border-radius: 30px;
    font-size: 14px;
    text-align: center;
    position: relative;
    left: 50%;
    top: 2%;
  }
  .btn:hover {
    background-color: #7a0202;
    color: #ffffff;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .main-page {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    padding: 10px 0;
  }
  .main-page__head1 {
    width: 45%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    margin-left: 7%;
    line-height: 1.5;
  }
  .main-page__head2 {
    width: 47%;
  }
  img {
    width: 100%;
    margin-top: 0;
  }
  .main-page__head1-header {
    font-size: 33px;
  }
  .main-page__head1-body {
    height: 17%;
    font-size: 15px;
    margin-top: 10px;
  }
  .main-page__head1-footer {
    height: 18%;
    font-size: 15px;
    margin-top: 20px;
  }
  .btn {
    background-color: #ffffff;
    color: black;
    padding: 15px 30px;
    margin-top: 20px;
    border-radius: 30px;
    font-size: 14px;
    text-align: center;
    position: relative;
    left: 50%;
    top: 2%;
  }
  .btn:hover {
    background-color: #7a0202;
    color: #ffffff;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .main-page {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    padding-bottom: 30px;
  }
  .main-page__head1 {
    width: 45%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    margin-left: 3%;
  }
  .main-page__head2 {
    width: 50%;
  }
  img {
    width: 80%;
    height: 220px;
    margin-top: 0;
  }
  .main-page__head1-header {
    font-size: 32px;
  }
  .main-page__head1-body {
    font-size: 15px;
    padding-top: 15px;
  }
  .main-page__head1-footer {
    font-size: 15px;
    padding-top: 15px;
  }
  .btn {
    background-color: #ffffff;
    color: black;
    padding: 7px 12px;
    margin-top: 10px;
    border-radius: 30px;
    font-size: 17px;
    text-align: center;
    position: relative;
    left: 50%;
    top: 2%;
  }
  .btn:hover {
    background-color: #7a0202;
    color: #ffffff;
  }
}
</style>