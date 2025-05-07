import { RouteNames } from "@/global/constants/RouteNames.ts";

export default [
    {
        path: '',
        name: RouteNames.First,
        component: () => import('@/views/index.vue'),
    },
]