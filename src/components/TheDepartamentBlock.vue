<template>
  <div class="departaments flex flex-col">
    <h2 class="departaments-title text-2xl"><span class="departaments-title-span">24 отдела</span> <br>для трудоустройства</h2>
    <p class="mt-8">Программа "100 Лидеров" это уникальная возможность найти свое призвание и встать в ряды с одними из лучших специалистов нашей великой страны!</p>
    <p class="mt-3">Ознакомьтесь со всеми нашими отделами подробнее в ВКонтакте!</p>
    <div class="departaments-arrow"><icon-departament-arrow /></div>
    <button class="mt-3 bg-brand-2 w-80 rounded-3xl departaments-button">Перейти в ВК</button>
  </div>
</template>

<script>
import IconDepartamentArrow from "@/components/icons/IconDepartamentArrow.vue";
export default {
  name: "TheDepartamentBlock",
  components: {
    IconDepartamentArrow
  }
}
</script>

<style scoped lang="scss">
  .departaments {
    &-title {
      font-family: "Muller-bold", serif;

      &-span {
        color: #00ADEF;
      }
    }

    &-arrow {
      align-self: center;
    }

    &-button {
      align-self: center;
      padding: 10px;
      font-size: 18px;
    }
  }
</style>
