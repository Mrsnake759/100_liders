<template>
  <div class="empty">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col items-center">
        <icon-alabuga-liders/>
        <p class="mt-5 w-full text-center">100 Лидеров - одна из лучших лидерских программ в России 2022 и 2023 года по версии Министерства труда и социальной защиты Российской Федерации</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-alabuga-world/>
        <p class="mt-5 w-full text-center">Особая экономическая зона «Алабуга» – компания мирового уровня. <br>Основываясь на принципах сотрудничества, инноваций и устойчивости, ОЭЗ «Алабуга» предлагает своим сотрудникам множество возможностей для карьерного роста и развития</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-alabuga-case/>
        <p class="mt-5 w-full text-center">Мы стремимся привлекать и удерживать лучшие таланты, предоставляя конкурентоспособные условия труда и возможности для профессионального развития</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconAlabugaCase from "@/components/icons/IconAlabugaCase.vue";
import IconAlabugaLiders from "@/components/icons/IconAlabugaLiders.vue";
import IconAlabugaWorld from "@/components/icons/IconAlabugaWorld.vue";
export default {
  name: "TheEmptyBlock",
  components: {
    IconAlabugaWorld,
    IconAlabugaLiders,
    IconAlabugaCase
  }
}
</script>

<style scoped lang="scss">

</style>
