<template>
  <navbar-page></navbar-page>
  <div class="app">
    <router-view></router-view>
  </div>
  <footer-page></footer-page>
</template>

<script>
import NavbarPage from "@/components/NavbarPage";
import FooterPage from "@/components/FooterPage";

export default {
  name: 'App',
  components: {
    FooterPage,
    NavbarPage,
  }
}
</script>

<style>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    width: 100%;
    padding: 0;
    text-align: center;
    background-color: #FFFFE0;
    font-family: Century Gothic, sans-serif;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    width: 100%;
    padding: 0;
    text-align: center;
    background-color: #FFFFE0;
    font-family: Century Gothic, sans-serif;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    width: 100%;
    padding: 0;
    text-align: center;
    background-color: #FFFFE0;
    font-family: Century Gothic, sans-serif;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    width: 100%;
    padding: 0;
    text-align: center;
    background-color: #FFFFE0;
    font-family: Century Gothic, sans-serif;
  }
}
</style>
