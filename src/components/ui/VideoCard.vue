<template>
  <BaseCard class="video-card">
    <template #card-header>
      <img class="video-card__preview" :src="preview" width="198" height="111" alt="preview" />
    </template>

    <template #card-main-content>
      <div class="video-card__content-wrapper">
        <p class="video-card__title body-title">{{ videoName }}</p>

        <div class="video-card__info-wrapper">
          <span class="video-card__channel">{{ channel }}</span>
          <span class="video-card__views">{{ refactoredViews }} views</span>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/Base/Card/BaseCard.vue'
import { computed } from "vue";

interface Props {
  preview?: string
  videoName?: string
  channel?: string
  views?: string
}

const props = withDefaults(defineProps<Props>(), {
  preview: '',
  videoName: '',
  channel: '',
  views: '',
})

const refactoredViews = computed(() => {
  return props.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})
</script>

<style scoped lang="scss">
.video-card {
  &__preview {
    width: 100%;
    height: 100%;
    border-radius: $border-radius;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: $indent-m;
  }

  &__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: $indent-xs;
  }
}
</style>