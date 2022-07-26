<template>
  <div class="aducation">
    <swiper
        class="aducation__swiper"
        :navigation="true"
        :modules="modules"
    >
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img1" :src="image1" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img2" :src="image2" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img3" :src="image3" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img4" :src="image4" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img4" :src="image5" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img4" :src="image6" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img5" :src="image7" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img4" :src="image8" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img4" :src="image9" >
      </swiper-slide>
      <swiper-slide class="aducation__swiper-slide">
        <img class="aducation__swiper-slide-img4" :src="image10" >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import image1 from "@/img/aducation/dip1.jpeg";
import image2 from "@/img/aducation/dip2.jpg";
import image3 from "@/img/aducation/dip3.jpg";
import image4 from "@/img/aducation/sert1.jpg";
import image5 from "@/img/aducation/sert2.jpg";
import image6 from "@/img/aducation/sert3.jpg";
import image7 from "@/img/aducation/sert4.png";
import image8 from "@/img/aducation/think1.jpg";
import image9 from "@/img/aducation/think2.jpg";
import image10 from "@/img/aducation/think3.jpg";


export default {
  name: 'aducation-component',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
      image7: image7,
      image8: image8,
      image9: image9,
      image10: image10,
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .aducation {
    background-color: #f5eded;
    padding: 10px 20px;
    width: 100%;
  }
  img {
    width: 50%;
  }
  .aducation__swiper {
    width: 100%;
    height: 600px;
  }

  .aducation__swiper-slide {
    width: 100%;
    text-align: center;
    font-size: 18px;
    background: #f5eded;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .aducation__swiper-slide-img1 {
    width: 70%;
  }
  .aducation__swiper-slide-img2 {
    width: 40%;
  }
  .aducation__swiper-slide-img3 {
    width: 40%;
  }
  .aducation__swiper-slide-img4 {
    width: 60%;
  }
  .aducation__swiper-slide-img5 {
    width: 30%;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {

}
@media screen and (max-width: 640px) and (min-width: 480px) {

}
@media screen and (max-width: 480px) and (min-width: 320px) {

}
</style>