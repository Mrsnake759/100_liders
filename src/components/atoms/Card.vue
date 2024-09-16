<template>
  <div class="card flex flex-col items-center justify-center bg-white rounded-3xl">
    <div class="test bg-brand-2 p-2 rounded-3xl text-center w-full">
      9 поток <br>
      Лидерская программа
    </div>
    <div class="test-2 mt-5">
      22.07. - 26.07
    </div>
    <img class="mt-8" src="@/assets/slide1.png" alt="slide_1">
    <div class="mt-3 test-2">
      Технические решения, которые повлияют на дальнейшую эксплуатацию, и реализация проекта в соответствии
      с политикой компании.
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped lang="scss">
.card {
  padding: 40px 30px;
}
.test {
  border-radius: 500px;
}

.test-2 {
  color: black;
}
</style>
