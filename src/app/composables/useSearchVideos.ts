import { ref } from 'vue'
import { $http } from '@/api/client'
import useRequest from './useRequest'
import { ENDPOINTS } from "@/api/endpoints.ts";
import type SearchVideoType from "@/app/types/SearchVideoType.ts";

export default function useExampleApi() {
    const form = ref<SearchVideoType>({
        input: ''
    })

    const { execute, isLoading, errors } = useRequest()

    const submit = async () => {
        return await execute(() => $http.post(ENDPOINTS, form.value))
    }

    return {
        form,
        submit,
        isLoading,
        errors,
    }
}
