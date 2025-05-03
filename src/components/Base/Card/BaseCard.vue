<template>
  <div class="card">
    <slot name="card-header"></slot>

    <slot name="card-main-content"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  display: inline-flex;
  flex-direction: column;
  gap: $indent-m;
  padding: $indent-l;
  border-radius: $border-radius;
  background: $color-base-light;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>