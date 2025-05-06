<template>
  <BaseButton class="search-button" :disabled="disabled">
    <svg class="icon-16">
      <use :href="'/src/assets/images/svg/icon-magnifying-glass.svg#icon'"></use>
    </svg>
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "@/components/Base/Button/BaseButton.vue";

interface Props {
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})
</script>

<style scoped lang="scss">
.search-button {
  svg {
    fill: $color-white;
  }
}
</style>