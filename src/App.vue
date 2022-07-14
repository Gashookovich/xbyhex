<template>
  <navbar-page></navbar-page>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarPage from "@/components/NavbarPage";

export default {
  name: 'App',
  components: {
    NavbarPage,
  }
}
</script>

<style>
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
</style>
