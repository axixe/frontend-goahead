import { ref } from 'vue'
import type { Ref } from 'vue'
import { isAxiosError, type AxiosError } from 'axios'

export default function useRequest<T = any>() {
    const isLoading = ref(false)
    const isError = ref(false)
    const errors: Ref<Record<string, string[] | string>> = ref({})
    const data: Ref<T | null> = ref(null)

    const execute = async (
        request: () => Promise<T>,
    ): Promise<T | null> => {
        isLoading.value = true
        isError.value = false
        errors.value = {}
        data.value = null

        try {
            const result = await request()
            data.value = result

            return result
        } catch (err: any) {
            isError.value = true

            if (isAxiosError(err)) {
                const axiosErr = err as AxiosError<any>
                const response = axiosErr.response?.data

                if (response?.errors) {
                    errors.value = response.errors
                }

                return null
            }

            throw err
        } finally {
            isLoading.value = false
        }
    }

    return {
        isLoading,
        isError,
        errors,
        data,
        execute,
    }
}
