<template>
  <div class="culture">
    <h2 class="culture-title text-2xl"><span class="culture-title-span">Корпоративная</span> <br>культура</h2>
    <p class="mt-8">«Мы растим промышленность для благополучия людей, создавая лучшую в мире инфраструктуру»</p>

    <div class="flex flex-col gap-10 mt-10">
      <p class="text-xl text-center">Ценности компании</p>
      <div class="flex flex-col items-center">
        <icon-culture-gerb/>
        <p class="mt-5 w-full text-center">Это наша компания, это наша страна</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-culture-circle/>
        <p class="mt-5 w-full text-center">Мы всегда выходим из зоны своего комфорта для обеспечения комфорта клиента</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-culture-sofa/>
        <p class="mt-5 w-full text-center">Зона развития и достижений находится в паре шагов от зоны комфорта</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-culture-medal/>
        <p class="mt-5 w-full text-center">Каждому по результату</p>
      </div>
    </div>


  </div>
</template>

<script>

import IconCultureCircle from "@/components/icons/IconCultureCircle.vue";
import IconCultureMedal from "@/components/icons/IconCultureMedal.vue";
import IconCultureGerb from "@/components/icons/IconCultureGerb.vue";
import IconCultureSofa from "@/components/icons/IconCultureSofa.vue";
export default {
  name: "TheCultureBlock",
  components: {
    IconCultureCircle,
    IconCultureMedal,
    IconCultureGerb,
    IconCultureSofa
  }
}
</script>

<style scoped lang="scss">
.culture {
  &-title {
    font-family: "Muller-bold", serif;

    &-span {
      color: #00ADEF;
    }
  }
}
</style>
