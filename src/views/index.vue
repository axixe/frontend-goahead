<template>
  <div class="index-page">
    <BaseForm class="index-page__search-form" @form:submit="searchVideos">
      <BaseInput
        v-model="form.input"
        :name="'video-name'"
        :label="'I GONNA WATCH...'"
        class="index-page__input"
      />
      <SearchButton :disabled="isLoading" @click="searchVideos" />
    </BaseForm>

    <BasePreloader v-if="isLoading" />
    <div v-else-if="!!searchResults?.length" class="index-page__video-list">
      <BaseCardList>
        <VideoCard
            v-for="video in enrichedVideos"
            :key="video.id"
            :preview="video.snippet.thumbnails.high.url"
            :video-name="video.snippet.title"
            :channel="video.snippet.channelTitle"
            :views="video.statistics?.viewCount"
        />
      </BaseCardList>

      <BaseButton @click="loadMoreVideos" :disabled="isLoading">Show more...</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/Base/Form/BaseForm.vue";
import BaseInput from "@/components/Base/Input/BaseInput.vue";
import SearchButton from "@/components/ui/SearchButton.vue";
import BasePreloader from "@/components/Base/Preloader/BasePreloader.vue";
import BaseCardList from "@/components/Base/Card/BaseCardList.vue";
import VideoCard from "@/components/ui/VideoCard.vue";
import useVideoSearch from "@/app/composables/useVideoSearch.ts";
import useVideoStatistics from "@/app/composables/useVideoStatistics.ts";
import BaseButton from "@/components/Base/Button/BaseButton.vue";

const { form, search, searchResults, isLoading, loadMore } = useVideoSearch()
const { enrichedVideos, fetchStatistics } = useVideoStatistics()

const searchVideos = async () => {
  await search()
  await fetchStatistics(searchResults.value)
}

const loadMoreVideos = async () => {
  await loadMore()
  await fetchStatistics(searchResults.value)
}
</script>

<style scoped lang="scss">
.index-page {
  display: flex;
  flex-direction: column;
  gap: $indent-xxl;

  &__search-form {
    display: flex;
    align-items: flex-end;
    gap: $indent-l;
  }

  &__video-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: $indent-xl;
  }
}
</style>