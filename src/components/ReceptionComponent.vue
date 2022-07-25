<template>
  <div class="reception">
    <form action="https://t.me/xbyhex" target="_blank">
      <button class="reception__btn">запись на приём</button>
    </form>

    <div>нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c
      <div class="reception__politic" @click="$router.push('/politic')">
        <strong>политикой конфиденциальности.</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reception-component',
}
</script>

<style scoped>
.reception {
  background-color: #f5eded;
  padding: 20px 20px;
  width: 100%;
  font-family: Century Gothic, sans-serif;
}
.reception__btn {
  width: 20%;
  padding: 15px 7px;
  margin: 20px 10px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
  cursor: pointer;
}
.reception__btn:hover {
  background-color: white;
  color: black;
}
.reception__politic {
  cursor: pointer;
}
</style>