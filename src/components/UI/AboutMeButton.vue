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
@media screen and (max-width: 1440px) and (min-width: 960px) {
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
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .about-me__btn {
    height: 50px;
    margin: 20px 0;
    border-radius: 30px;
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
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .about-me__btn {
    height: 40px;
    margin: 20px 0;
    padding: 2px 2px;
    border-radius: 30px;
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
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .about-me__btn {
    height: 35px;
    margin: 30px 0;
    padding: 5px 5px;
    border-radius: 30px;
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    font-size: 15px;
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
}
</style>