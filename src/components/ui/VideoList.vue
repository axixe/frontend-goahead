<template>
  <BaseCardList>
    <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :preview="video.snippet.thumbnails.high.url"
        :video-name="video.snippet.title"
        :channel="video.snippet.channelTitle"
        :views="video.statistics?.viewCount"
    />
  </BaseCardList>

  <BaseButton @click="$emit('load:more-videos')" :disabled="isLoading">Show more...</BaseButton>
</template>

<script setup lang="ts">
import BaseCardList from "@/components/Base/Card/BaseCardList.vue";
import VideoCard from "@/components/ui/VideoCard.vue";
import BaseButton from "@/components/Base/Button/BaseButton.vue";
import type { SearchVideoResponseType } from "@/app/types/SearchVideoResponseType.ts";

interface Props {
  videos: SearchVideoResponseType
  isLoading?: boolean
}

withDefaults(defineProps<Props>(), {
  isLoading: false,
})

defineEmits<{
  (e: 'load:more-videos'): void
}>()
</script>

<style scoped lang="scss">

</style>