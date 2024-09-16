<script lang="ts">
  import TheMainBlock from "@/components/TheMainBlock.vue";
  import TheReasonBlock from "@/components/TheReasonBlock.vue";
  import TheDepartamentBlock from "@/components/TheDepartamentBlock.vue";
  import TheAlabugaBlock from "@/components/TheAlabugaBlock.vue";
  import TheEmptyBlock from "@/components/TheEmptyBlock.vue";
  import TheCultureBlock from "@/components/TheCultureBlock.vue";
  import TheGetBlock from "@/components/TheGetBlock.vue";
  import TheParticipantBlock from "@/components/TheParticipantBlock.vue";
  import TheFormBlock from "@/components/TheFormBlock.vue";
  // import Card from "@/components/atoms/Card.vue";

  export default {
    components: {
      TheMainBlock,
      TheReasonBlock,
      TheDepartamentBlock,
      TheAlabugaBlock,
      TheEmptyBlock,
      TheCultureBlock,
      TheGetBlock,
      TheParticipantBlock,
      TheFormBlock
      // Card
    }
  }
</script>

<template>
  <the-main-block></the-main-block>
  <the-reason-block></the-reason-block>
  <the-participant-block></the-participant-block>
  <the-departament-block></the-departament-block>
  <the-alabuga-block></the-alabuga-block>
  <the-empty-block></the-empty-block>
  <the-culture-block></the-culture-block>
  <the-get-block></the-get-block>
  <the-form-block></the-form-block>

<!--  <card></card>-->
</template>

<style scoped lang="scss">

</style>


