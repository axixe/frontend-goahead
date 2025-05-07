import { useRoute, useRouter } from "vue-router";


export const useUpdateUrlQuery = () => {
    const router = useRouter()
    const route = useRoute()

    const updateUrlQuery = (queryName: string, newQuery: string) => {
        router.push({
            query: {
                ...route.query,
                [queryName]: newQuery || undefined,
            }
        })
    }

    return {
        updateUrlQuery,
    }
}