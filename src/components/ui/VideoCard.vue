<template>
  <BaseCard v-if="video" class="video-card">
    <template #card-header>
      <img class="video-card__preview" :src="video.preview" width="198" height="111" alt="preview" />
    </template>

    <template #card-main-content>
      <div class="video-card__content-wrapper">
        <p class="video-card__title body-title">{{ video.name }}</p>

        <div class="video-card__info-wrapper">
          <span class="video-card__channel">{{ video.channel }}</span>
          <span class="video-card__views">{{ video.views }}</span>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/Base/Card/BaseCard.vue'
import type VideoCardType from '@/global/types/VideoCardType.ts'

interface Props {
  video: VideoCardType
}

withDefaults(defineProps<Props>(), {
  video: () => {},
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