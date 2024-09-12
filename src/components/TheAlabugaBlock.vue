<template>
  <div>
    <img class="w-full" src="@/assets/alabuga_360.png" alt="">
    <div class="alabuga">
      <h2 class="text-xl">ОЭЗ «Алабуга» лучшая ОЭЗ в Европе</h2>
      <div class="alabuga_table">
        <div class="alabuga_table-item">
          <icon-alabuga-factory/>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl bold">34</h3>
            <p>действующих резидентов</p>
          </div>
        </div>
        <div class="alabuga_table-item">
          <icon-alabuga-worker/>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl bold">17 035</h3>
            <p>сотрудников</p>
          </div>
        </div>
        <div class="alabuga_table-item">
          <icon-alabuga-ruble/>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl bold">169 млрд. руб.</h3>
            <p>объём инвестиций в ОЭЗ</p>
          </div>
        </div>
        <div class="alabuga_table-item">
          <icon-alabuga-money/>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl bold">179 млрд. руб.</h3>
            <p>выручка резидентов за 2023 г.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-10 gap-3">
        <button class="alabuga_button alabuga_button-blue">Смотреть видео</button>
        <button class="alabuga_button alabuga_button-gray">Сайт компании</button>
      </div>

    </div>
  </div>

</template>

<script>
import IconAlabugaFactory from "@/components/icons/IconAlabugaFactory.vue";
import IconAlabugaRuble from "@/components/icons/IconAlabugaRuble.vue";
import IconAlabugaMoney from "@/components/icons/IconAlabugaMoney.vue";
import IconAlabugaWorker from "@/components/icons/IconAlabugaWorker.vue";
export default {
  name: "TheAlabugaBlock",
  components: {
    IconAlabugaFactory,
    IconAlabugaRuble,
    IconAlabugaMoney,
    IconAlabugaWorker
  }
}
</script>

<style scoped lang="scss">
.alabuga {
  background-color: white;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  color: black;
  padding: 40px 30px 60px 30px;

  &_table {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-item {
      display: grid;
      grid-template-columns: 20% 80%;
      gap: 10px;
    }
  }

  &_button {
    width: 100%;
    padding: 10px;
    border-radius: 20px;

    &-blue {
      background-color: #1F59B0;
      color: white;
    }

    &-gray {
      background-color: #D3D8E6;
    }
  }
}
</style>
