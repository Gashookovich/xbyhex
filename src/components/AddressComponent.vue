<template>
  <div class="address">
    <div class="address__content">
      <div class="address__content-header">онлайн консультации проводятся по</div>
      <div class="address__content-footer">facetime, skype, zoom</div>
    </div>
    <div class="address__content">
      <div class="address__content-header">очные встречи проводятся по адресу:</div>
      <div class="address__content-footer">г. Казань, ул. Профсоюзная, д. 34</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'address-component',
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .address {
    width: 100%;
    background-color: white;
    padding: 20px 15px;
    font-family: Century Gothic, sans-serif;
  }
  .address__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    font-size: 15px;
  }
  .address__content-header {
    opacity: 0.6;
  }
  .address__content-footer {
    font-weight: bold;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .address {
    width: 100%;
    background-color: white;
    padding: 20px 15px;
    font-family: Century Gothic, sans-serif;
  }
  .address__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    font-size: 14px;
  }
  .address__content-header {
    opacity: 0.6;
  }
  .address__content-footer {
    font-weight: bold;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .address {
    width: 100%;
    background-color: white;
    padding: 20px 15px;
    font-family: Century Gothic, sans-serif;
  }
  .address__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    font-size: 13px;
  }
  .address__content-header {
    opacity: 0.6;
  }
  .address__content-footer {
    font-weight: bold;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .address {
    width: 100%;
    background-color: white;
    padding: 20px 15px;
    font-family: Century Gothic, sans-serif;
  }
  .address__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    font-size: 12px;
  }
  .address__content-header {
    opacity: 0.6;
  }
  .address__content-footer {
    font-weight: bold;
  }
}
</style>