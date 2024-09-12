<script lang="ts">
  import TheMainBlock from "@/components/TheMainBlock.vue";
  import TheReasonBlock from "@/components/TheReasonBlock.vue";
  import TheDepartamentBlock from "@/components/TheDepartamentBlock.vue";
  import TheAlabugaBlock from "@/components/TheAlabugaBlock.vue";
  import TheEmptyBlock from "@/components/TheEmptyBlock.vue";
  import TheCultureBlock from "@/components/TheCultureBlock.vue";

  export default {
    components: {
      TheMainBlock,
      TheReasonBlock,
      TheDepartamentBlock,
      TheAlabugaBlock,
      TheEmptyBlock,
      TheCultureBlock
    }
  }
</script>

<template>
  <the-main-block></the-main-block>
  <the-reason-block></the-reason-block>
  <the-departament-block></the-departament-block>
  <the-alabuga-block></the-alabuga-block>
  <the-empty-block></the-empty-block>
  <the-culture-block></the-culture-block>
</template>

<style scoped lang="scss">

</style>


