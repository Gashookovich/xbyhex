<template>
  <div class="reception">
    <form action="https://t.me/xbyhex" target="_blank">
      <button class="reception__btn">запись на приём</button>
    </form>
    <div class="reception__politic">нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c
      <div class="reception__politic-click" @click="$router.push('/politic')">
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
@media screen and (max-width: 1440px) and (min-width: 960px) {
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
  .reception__politic-click {
    cursor: pointer;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .reception {
    background-color: #f5eded;
    padding: 20px 20px;
    width: 100%;
    font-family: Century Gothic, sans-serif;
  }
  .reception__btn {
    padding: 15px 7px;
    margin: 20px 10px;
    border-radius: 30px;
    font-size: 15px;
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
    font-size: 13px;
  }
  .reception__politic-click {
    cursor: pointer;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .reception {
    background-color: #f5eded;
    padding: 15px 20px;
    width: 100%;
    font-family: Century Gothic, sans-serif;
  }
  .reception__btn {
    padding: 15px 7px;
    margin: 20px 10px;
    border-radius: 30px;
    font-size: 13px;
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
    font-size: 12px;
  }
  .reception__politic-click {
    cursor: pointer;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .reception {
    background-color: #f5eded;
    padding: 15px 20px;
    width: 100%;
    font-family: Century Gothic, sans-serif;
  }
  .reception__btn {
    padding: 15px 7px;
    margin: 15px 10px;
    border-radius: 30px;
    font-size: 12px;
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
    font-size: 11px;
  }
  .reception__politic-click {
    cursor: pointer;
  }
}
</style>