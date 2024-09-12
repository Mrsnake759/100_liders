<template>
  <div class="get">
    <h2 class="get-title text-2xl text-center w-full">Что <span class="get-span">получают</span> участники</h2>

    <div class="flex flex-col gap-10 mt-10">
      <div class="flex flex-col items-center">
        <icon-culture-sofa />
        <h3 class="text-xl text-center mt-3">Проживание</h3>
        <p class="mt-1 w-2/3 text-center">Бесплатное проживание в жилом комплексе в г. Елабуга</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-get-food />
        <h3 class="text-xl text-center mt-3">Питание</h3>
        <p class="mt-1 w-2/3 text-center">Бесплатное трехразовое
          питание для участников
          программы</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-get-bus />
        <h3 class="text-xl text-center mt-3">Трансфер</h3>
        <p class="mt-1 w-2/3 text-center">Выход из зоны комфорта для тебя привычное дело</p>
      </div>
    </div>

    <div class="get-card flex flex-col items-center justify-center rounded-3xl bg-white mt-10">
      <icon-get-computer />
      <h3 class="mt-4 text-xl text-center w-full">И самое главное <br><span class="get-span">- работу мечты</span></h3>
      <button class="get-button mt-6">Подать заявку</button>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div class="flex flex-col items-center justify-center">
        <div class="item">4</div>
        <p class="mt-2 text-xl">Года реализации</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="item">20</div>
        <p class="mt-2 text-xl">Года реализации</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="item">1526</div>
        <p class="mt-2 text-xl text-center">Участников прошли лидерскую программу</p>
      </div>
    </div>

  </div>
</template>

<script>
import IconGetBus from "@/components/icons/IconGetBus.vue";
import IconGetFood from "@/components/icons/IconGetFood.vue";
import IconCultureSofa from "@/components/icons/IconCultureSofa.vue";
import IconGetComputer from "@/components/icons/IconGetComputer.vue";
export default {
  name: "TheGetBlock",
  components: {
    IconCultureSofa,
    IconGetBus,
    IconGetFood,
    IconGetComputer
  }
}
</script>

<style scoped lang="scss">

.item {
  font-family: "Muller-bold", serif;
  color: #00ADEF;
  font-size: 64px;
}

.get-card {
  padding: 25px 30px;
  color: black;
}

.get-button {
  width: 100%;
  color: white;
  font-family: "Muller-bold", serif;
  font-size: 24px;
  border-radius: 40px;
  background-color: #FF425E;
  padding: 15px 0;
}

.get-span {
  color: #00ADEF;
}
</style>
