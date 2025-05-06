<template>
  <form class="form" @submit="handleSubmit" @keydown="preventSubmit">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'form:submit'): void
}>()

const handleSubmit = (event: Event) => {
  event.preventDefault()
}

const preventSubmit = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    emit('form:submit')
  }
}
</script>

<style scoped lang="scss"></style>
