import { $http } from '@/api/apiSettings'
import useRequest from '@/composables/useRequest'
import { ref } from "vue";
import useVideoStatistics from "./useVideoStatistics.ts";
import type {PageTokens} from "../types/PageTokensType.ts";

export default function useVideoSearch() {
    const { enrichedVideos, fetchStatistics } = useVideoStatistics()
    const { execute, isLoading } = useRequest()

    const defaultParams = new URLSearchParams({
        part: 'snippet',
        type: 'video',
        maxResults: '9',
        key: import.meta.env.VITE_API_TOKEN,
    })

    const foundedVideos = ref<any[]>([])
    const pageTokens = ref<PageTokens | null>(null)

    const search = async (query: string) => {
        if (!query) return

        const response = await execute(() => $http.get(`/search?${defaultParams.toString()}&${query}`))

        if (response?.data) {
            await fetchStatistics(response.data.items)

            foundedVideos.value = enrichedVideos.value
            pageTokens.value = {
                prev: response.data.prevPageToken || null,
                next: response.data.nextPageToken || null,
            }
        }
    }

    return {
        search,
        foundedVideos,
        isLoading,
        pageTokens,
    }
}
