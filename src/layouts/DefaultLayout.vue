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
  width: 100%;
  padding: $indent-xl 120px;

  @media screen and (max-width: 991px) {
    padding: $indent-s $indent-l;
  }
}
</style>