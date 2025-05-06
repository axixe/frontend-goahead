import { ref } from 'vue'
import { $http } from '@/api/apiSettings'

export default function useVideoStatistics() {
    const enrichedVideos = ref([])

    const fetchStatistics = async (videos: any[]) => {
        const videoIds = videos.map(v => v.id.videoId).join(',')
        if (!videoIds) return

        const params = new URLSearchParams({
            part: 'statistics',
            id: videoIds,
            key: import.meta.env.VITE_API_TOKEN
        })

        const response = await $http.get(`/videos?${params.toString()}`)

        const statsMap = Object.fromEntries(
            response.data.items.map((item: any) => [item.id, item.statistics])
        )

        enrichedVideos.value = videos.map(video => ({
            ...video,
            statistics: statsMap[video.id.videoId]
        }))
    }

    return {
        enrichedVideos,
        fetchStatistics
    }
}
