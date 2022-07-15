import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import WorkingComponent from "@/components/WorkingComponent";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/working',
        component: WorkingComponent
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;