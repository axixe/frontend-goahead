<template>
  <li class="select-option" @click="$emit('select:element', query)">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
interface Props {
  query: string
}

withDefaults(defineProps<Props>(), {
  query: '',
})

defineEmits<{
  (e: 'select:element', value: string): void
}>()
</script>

<style scoped lang="scss">
.select-option {
  padding: $indent-s $indent-l;
  transition: background 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: $color-base;
  }
}
</style>