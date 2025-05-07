<template>
  <div class="video-list">
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

    <div class="video-list__pagination">
      <BaseButton
        v-if="pageTokens.prev"
        @click="updateUrlQuery('pageToken', pageTokens.prev)"
        :disabled="isLoading"
      >Previous page</BaseButton>
      <BaseButton
        v-if="pageTokens.next"
        @click="updateUrlQuery('pageToken', pageTokens.next)"
        :disabled="isLoading"
      >Next page</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseCardList from "@/components/Base/Card/BaseCardList.vue";
import VideoCard from "@/components/ui/VideoCard.vue";
import BaseButton from "@/components/Base/Button/BaseButton.vue";
import type { SearchVideoResponseType } from "@/app/types/SearchVideoResponseType.ts";
import { useUpdateUrlQuery } from "@/composables/useUpdateUrlQuery.js";
import type { PageTokens } from "@/app/types/PageTokensType.ts";

const { updateUrlQuery } = useUpdateUrlQuery()

interface Props {
  videos: SearchVideoResponseType
  isLoading?: boolean
  pageTokens?: PageTokens | null
}

withDefaults(defineProps<Props>(), {
  isLoading: false,
  pageTokens: null
})

defineEmits<{
  (e: 'load:prev-page'): void
  (e: 'load:next-page'): void
}>()
</script>

<style scoped lang="scss">
.video-list {
  &__pagination {
    display: flex;
    justify-content: center;
    gap: $indent-m;
  }
}
</style>