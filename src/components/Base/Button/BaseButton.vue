<template>
  <button class="button" type="button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})
</script>

<style scoped lang="scss">
.button {
  padding: 12px;
  border-radius: $border-radius;
  background: $color-base-light;
  color: $color-white;
}
</style>