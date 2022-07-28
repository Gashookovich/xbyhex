<template>
  <div class="about-me">
    <div class="about-me__left">
      <img :src="image" />
      <div>
        <h3>какие инструменты я использую в работе?</h3>
        <div class="about-me__left-footer">
          <div class="about-me__left-footer-text">• <strong>КПТ</strong> - когнитивно-поведенческая терапия</div>
          <div class="about-me__left-footer-text">• <strong>психосинтез</strong></div>
          <div class="about-me__left-footer-text">• транз(с)актный <strong>анализ</strong></div>
        </div>
      </div>
    </div>
    <div class="about-me__right">
      <h1>ОБО МНЕ</h1>
      <div class="about-me__right-header">клинический психолог</div>
      <div class="about-me__right-content">
        <div class="about-me__right-content-text"><strong>я</strong> — <strong>Мария</strong>, можно Мари или Марий.</div>
        <div class="about-me__right-content-text-pad">
          <div class="about-me__right-content-text">мне 27, <strong>с 2016</strong> года и по сей день - я в личной терапии, а <strong>с 2019</strong> являюсь инструментом,
            с помощью которого люди меняют свои жизни</div>
        </div>
        <div class="about-me__right-content-text-pad">
          <div class="about-me__right-content-text">чем <strong>клинический</strong> психолог отличается от <strong>обычного</strong>психолога?</div>
        </div>
        <div class="about-me__right-content-text">• я подхожу к решению задач, которые ставят перед собой клиенты, не только с
          психологической стороны, а ещё как минимум с биологической</div>
        <div class="about-me__right-content-text">• я имею право вести не только психокоррекцию, но и <strong>психотерапию расстройств и синдромов</strong></div>
        <div class="about-me__right-content-text">• провожу детальную <strong>психодиагностику</strong>, после которой могу выдавать клиническое заключение
          с предполагаемым диагнозом</div>
      </div>
      <div class="about-me__right-footer">
        <h3>что было в моём личном опыте?</h3>
        <div class="about-me__right-footer-block">
          <div class="about-me__right-footer-text">• в подростковом возрасте — девиантное поведение с истероидным расстройством в лёгкой степени</div>
          <div class="about-me__right-footer-text">• там же я вляпалась в алкогольную зависимость, из которой я вылезла окончательно в 2018</div>
          <div class="about-me__right-footer-text">• ПТСР, с которым я справилась сама</div>
          <div class="about-me__right-footer-text">• депрессивный эпизод, с которым помог справиться психотерапевт</div>
        </div>
        <div class="about-me__right-footer-end">сейчас, благодаря образованию и психотерапии, я могу с уверенностью заявить, что
          пришла ко всем шестнадцати критериям психического здоровья, о которых писала Нэнси Мак Вильямс.</div>
        <about-me-button />
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/img/body.png";
import AboutMeButton from "@/components/UI/AboutMeButton";

export default {
  name: 'about-me',
  components: {
    AboutMeButton,
  },
  data() {
    return {
      image: image,
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .about-me {
    display: flex;
    flex-direction: row;
    background-color: #f5eded;
  }
  .about-me__left {
    padding: 15px 15px;
  }
  img {
    width: 100%;
  }
  h3 {
    font-weight: bold;
    padding: 10px 0;
  }
  .about-me__left-footer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 10%;
  }
  .about-me__left-footer-text {
    padding: 5px 0;
  }
  h1 {
    font-size: 46px;
    font-weight: lighter;
  }
  .about-me__right {
    padding: 15px 15px;
  }
  .about-me__right-header {
    padding: 7px 0;
  }
  .about-me__right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-content-text {
    padding: 5px 15px;
    font-size: 17px;
  }
  .about-me__right-content-text-pad {
    padding-top: 30px;
  }
  .about-me__right-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-footer-block {
    text-align: left;
  }
  .about-me__right-footer-text {
    padding: 5px 15px;
    font-size: 17px;
  }
  .about-me__right-footer-end {
    padding-top: 50px;
    line-height: 1.5;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .about-me {
    display: flex;
    flex-direction: row;
    background-color: #f5eded;
  }
  .about-me__left {
    padding: 10px 10px;
  }
  img {
    width: 100%;
  }
  h3 {
    font-size: 15px;
    font-weight: bold;
    padding: 10px 0;
  }
  .about-me__left-footer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 10%;
    font-size: 13px;
  }
  .about-me__left-footer-text {
    padding: 5px 0;
  }
  h1 {
    font-size: 38px;
    font-weight: lighter;
  }
  .about-me__right {
    padding: 15px 15px;
  }
  .about-me__right-header {
    padding: 7px 0;
    font-size: 15px;
  }
  .about-me__right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-content-text {
    padding: 5px 15px;
    font-size: 13px;
  }
  .about-me__right-content-text-pad {
    padding-top: 10px;
  }
  .about-me__right-footer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-footer-block {
    text-align: left;
  }
  .about-me__right-footer-text {
    padding: 5px 15px;
    font-size: 13px;
  }
  .about-me__right-footer-end {
    padding-top: 20px;
    line-height: 1.5;
    font-size: 13px;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .about-me {
    display: flex;
    flex-direction: row;
    background-color: #f5eded;
  }
  .about-me__left {
    padding: 10px 10px;
  }
  img {
    width: 100%;
  }
  h3 {
    font-size: 13px;
    font-weight: bold;
    padding: 10px 0;
  }
  .about-me__left-footer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 10%;
    font-size: 11px;
  }
  .about-me__left-footer-text {
    padding: 5px 0;
  }
  h1 {
    font-size: 32px;
    font-weight: lighter;
  }
  .about-me__right {
    padding: 15px 15px;
  }
  .about-me__right-header {
    padding: 7px 0;
    font-size: 13px;
  }
  .about-me__right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-content-text {
    padding: 5px 10px;
    font-size: 11px;
  }
  .about-me__right-content-text-pad {
    padding-top: 10px;
  }
  .about-me__right-footer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-footer-block {
    text-align: left;
  }
  .about-me__right-footer-text {
    padding: 5px 10px;
    font-size: 11px;
  }
  .about-me__right-footer-end {
    padding-top: 10px;
    line-height: 1.5;
    font-size: 11px;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .about-me {
    display: flex;
    flex-direction: row;
    background-color: #f5eded;
  }
  .about-me__left {
    padding: 10px 5px;
  }
  img {
    width: 100%;
  }
  h3 {
    font-size: 11px;
    font-weight: bold;
    padding: 10px 0;
  }
  .about-me__left-footer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 10%;
    font-size: 10px;
  }
  .about-me__left-footer-text {
    padding: 2px 0;
  }
  h1 {
    font-size: 22px;
    font-weight: lighter;
  }
  .about-me__right {
    padding: 5px 5px;
  }
  .about-me__right-header {
    padding: 7px 0;
    font-size: 10px;
  }
  .about-me__right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-content-text {
    padding: 5px 10px;
    font-size: 10px;
  }
  .about-me__right-content-text-pad {
    padding-top: 10px;
  }
  .about-me__right-footer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 5px 10px;
  }
  .about-me__right-footer-block {
    text-align: left;
  }
  .about-me__right-footer-text {
    padding: 5px 10px;
    font-size: 10px;
  }
  .about-me__right-footer-end {
    padding-top: 10px;
    line-height: 1.5;
    font-size: 10px;
  }
}
</style>