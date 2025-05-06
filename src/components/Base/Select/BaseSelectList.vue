<template>
  <ul class="select-list">
    <slot>
      <li class="select-list__not-found-item">Not enough options for selecting :(</li>
    </slot>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.select-list {
  background: $color-base-light;
  border-radius: $border-radius;

  &__not-found-item {
    padding: $indent-s $indent-m;
    user-select: none;
  }
}
</style>