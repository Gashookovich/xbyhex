<template>
  <div class="navbar">
    <div>xbyhex</div>
    <div class="navbar__btns">
      <menu-buttons>обо мне</menu-buttons>
      <menu-buttons>с чем работаю</menu-buttons>
      <menu-buttons>образование</menu-buttons>
      <menu-buttons>связь со мной</menu-buttons>
      <menu-buttons>прайс</menu-buttons>
      <menu-buttons class="navbar__btns-contact">контакты</menu-buttons>
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
.navbar {
  height: 70px;
  background-color: black;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-family: Georgia, serif;
  font-size: 25px;
  color: #ffffff;
}
.navbar__btns {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.navbar__btns-contact {
  background-color: #ffffff;
  color: black; height: 70%;
  border-radius: 30px;
  margin-top: 8px;
}
.navbar__btns-contact:hover {
  background-color: #7a0202;
  color: #ffffff;
}
</style>