<template>
  <div class="navbar">
    <div class="navbar__header">xbyhex</div>
    <div class="navbar__btns">
      <menu-buttons @click="$router.push('/about')">обо мне</menu-buttons>
      <menu-buttons @click="$router.push('/working')">с чем работаю</menu-buttons>
      <menu-buttons>прайс</menu-buttons>
      <menu-buttons @click="$router.push('/aducation')">образование</menu-buttons>
      <menu-buttons @click="$router.push('/')">главная</menu-buttons>
    </div>
  </div>
</template>

<script>
import MenuButtons from "@/components/UI/MenuButtons";

export default {
  name: 'navbar-page',
  components: {
    MenuButtons,
  },
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .navbar {
    height: 70px;
    background-color: black;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-family: Century Gothic, sans-serif;
    font-size: 25px;
    color: #ffffff;
  }
  .navbar__btns {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .navbar {
    height: 70px;
    background-color: black;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-family: Century Gothic, sans-serif;
    font-size: 25px;
    color: #ffffff;
  }
  .navbar__btns {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .navbar {
    height: 70px;
    background-color: black;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-family: Century Gothic, sans-serif;
    font-size: 25px;
    color: #ffffff;
  }
  .navbar__btns {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7px;
    margin: 0 7px;
  }
  .navbar__header {
    font-size: 20px;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .navbar {
    height: 70px;
    background-color: black;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-family: Century Gothic, sans-serif;
    font-size: 25px;
    color: #ffffff;
  }
  .navbar__btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1px;
    margin: 0 1px;
  }
  .navbar__header {
    font-size: 20px;
  }
}
</style>