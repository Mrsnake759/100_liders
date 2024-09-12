<template>
  <div class="main flex flex-col">
    <h1 class="ml-4 mr-4 pt-52 text-4xl main-title">Развивай страну, развивай себя</h1>
    <p class="ml-4 mr-4 text-lg mt-3 main-subtitle">Помогаем молодым лидерам не просто найти работу, а стать частью перемен в стране.</p>
    <div class="ml-4 mr-4 flex flex-row gap-10 mt-7">
      <icon-liders-logo/>
      <icon-alabuga-logo/>
    </div>
    <p class="ml-4 mr-4 mt-7">Лидерская программа - самый эффективный способ трудоустройства
      в компанию мирового уровня ОЭЗ "Алабуга". </p>
    <p class="ml-4 mr-4 mt-3">Сделай первый шаг к изменению себя и своей страны.</p>
    <p class="ml-4 mr-4 mt-3 main-text">Участие бесплатное!</p>
    <button class="ml-4 mr-4 mt-7 bg-red_100 w-80 rounded-3xl main-button">Подать заявку</button>
  </div>
</template>

<script lang="ts">
import IconLidersLogo from "@/components/icons/IconLidersLogo.vue";
import IconAlabugaLogo from "@/components/icons/IconAlabugaLogo.vue";

export default {
  name: "TheMainBlock",
  components: {
    IconLidersLogo,
    IconAlabugaLogo
  }
}
</script>

<style scoped lang="scss">
.main {
  margin: 0 -16px;
  height: 800px;
  background-image: url("@/assets/main_360.png");
  background-size: cover; /* Изображение будет масштабироваться, чтобы покрыть весь контейнер */
  background-position: center; /* Центрирование изображения */
  background-repeat: no-repeat;
  color: white;

  &-title {
    font-family: "Muller-bold", serif;
  }

  &-subtitle {
    font-family: "Muller-medium", serif;
  }

  &-text {
    font-family: "Muller-bold", serif;
  }

  &-button {
    align-self: center;
    padding: 10px;
    font-size: 24px;
    font-family: "Muller-bold", serif;
  }
  &-button:hover {
    background-color: #1F59B0;
  }
}
</style>
