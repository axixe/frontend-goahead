<template>
  <div class="index-page">
    <BaseForm class="index-page__search-form" @form:submit="router.push({ query: { q: formModel } })">
      <BaseInput
        v-model="formModel"
        :name="'video-name'"
        :label="'I GONNA WATCH...'"
        class="index-page__input"
      />
      <SearchButton :disabled="isLoading" @click="router.push({ query: { q: formModel } })" />
    </BaseForm>

    <BaseSelect
        v-model="sortModel"
      :options="DateSortSelectMock"
      :name="'date-sort'"
      :label="'Sort by'"
      :disabled="isLoading"
      @select:element="updateUrlQuery('order', sortModel)"
    />

    <BasePreloader v-if="isLoading" />
    <VideoList
      v-else-if="!!foundedVideos?.length"
      :videos="foundedVideos"
      :is-loading="isLoading"
      :page-tokens="pageTokens"
      class="index-page__video-list"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import BaseForm from "@/components/Base/Form/BaseForm.vue";
import BaseInput from "@/components/Base/Input/BaseInput.vue";
import SearchButton from "@/components/ui/SearchButton.vue";
import BasePreloader from "@/components/Base/Preloader/BasePreloader.vue";
import VideoList from "@/components/ui/VideoList.vue";
import BaseSelect from "@/components/Base/Select/BaseSelect.vue";
import useVideoSearch from "@/app/composables/useVideoSearch.ts";
import { useUpdateUrlQuery } from "@/composables/useUpdateUrlQuery.js";
import { useRoute, useRouter } from "vue-router";
import { DateSortSelectMock } from "@/mock/DateSortSelectMock.ts";

const { search, pageTokens, foundedVideos, isLoading } = useVideoSearch()
const { updateUrlQuery } = useUpdateUrlQuery()

const route = useRoute()
const router = useRouter()

const formModel = ref<string>('')
const sortModel = ref<string>('')

watch(
  () => route.query,
  async (newQuery: any) => {
    const formattedQueryLink = new URLSearchParams(newQuery).toString()

    await search(formattedQueryLink)
  },
  { immediate: true }
)
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