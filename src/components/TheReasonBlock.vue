<template>
  <div class="pt-16 pb-16 reason bg-brand-primary flex flex-col justify-center items-center rounded-3xl">
    <h2 class="reason-title text-2xl w-2/3 text-center">Это программа для тебя, если:</h2>
    <div class="flex flex-col gap-10 mt-10">
      <div class="flex flex-col items-center">
        <icon-reason-first/>
        <p class="mt-5 w-2/3 text-center">Тебе от 19 до 27 лет</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-reason-second/>
        <p class="mt-5 w-2/3 text-center">Готов вкладывать энергию
          и талант в реализацию крупных проектов</p>
      </div>
      <div class="flex flex-col items-center">
        <icon-reason-third/>
        <p class="mt-5 w-2/3 text-center">Выход из зоны комфорта для тебя привычное дело</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconReasonFirst from "@/components/icons/IconReasonFirst.vue";
import IconReasonSecond from "@/components/icons/IconReasonSecond.vue";
import IconReasonThird from "@/components/icons/IconReasonThird.vue";
export default {
  name: "TheReasonBlock",
  components: {
    IconReasonFirst,
    IconReasonSecond,
    IconReasonThird
  }
}
</script>

<style scoped lang="scss">
.reason {
  &-title {
    font-family: "Muller-bold", serif;
  }
}
</style>
