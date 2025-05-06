<template>
  <div class="layout">
    <BaseHeader />

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/Base/Header/BaseHeader.vue'

</script>

<style scoped lang="scss">
.layout {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: $indent-xxl;
  width: 100%;
  padding: $indent-xl 0;

  main {
    width: 100%;
    max-width: 1280px; // или другая ширина
    padding: 0 120px;

    @media screen and (max-width: 991px) {
      padding: 0 $indent-l;
    }
  }
}
</style>