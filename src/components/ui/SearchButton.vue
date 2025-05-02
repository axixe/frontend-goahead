<template>
  <button class="search-button" type="button">
    <svg class="icon-16">
      <use :href="'/src/assets/images/svg/icon-magnifying-glass.svg#icon'"></use>
    </svg>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.search-button {
  padding: 12px;
  border-radius: $border-radius;
  background: $color-base-light;

  svg {
    fill: $color-white;
  }
}
</style>