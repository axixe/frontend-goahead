import { ref } from 'vue'
import { $http } from '@/api/apiSettings.ts'
import useRequest from '@/composables/useRequest.ts'
import type SearchVideoType from '@/app/types/SearchVideoType.ts'

export default function useVideoSearch() {
    const form = ref<SearchVideoType>({
        input: '',
    })

    const { execute, isLoading, errors } = useRequest()
    const searchResults = ref<any[]>([])
    const nextPageToken = ref<string | null>(null)

    const buildParams = (pageToken?: string) => {
        const params = new URLSearchParams({
            part: 'snippet',
            type: 'video',
            maxResults: '9',
            q: form.value.input,
            key: import.meta.env.VITE_API_TOKEN,
        })

        if (pageToken) {
            params.append('pageToken', pageToken)
        }

        return params
    }

    const search = async () => {
        const params = buildParams()
        const res = await execute(() =>
            $http.get(`/search?${params.toString()}`)
        )

        if (res?.data?.items) {
            searchResults.value = res.data.items
            nextPageToken.value = res.data.nextPageToken || null
        }
    }

    const loadMore = async () => {
        if (!nextPageToken.value) return

        const params = buildParams(nextPageToken.value)
        const res = await execute(() =>
            $http.get(`/search?${params.toString()}`)
        )

        if (res?.data?.items) {
            searchResults.value.push(...res.data.items)
            nextPageToken.value = res.data.nextPageToken || null
        }
    }

    return {
        form,
        search,
        loadMore,
        isLoading,
        errors,
        searchResults,
    }
}
