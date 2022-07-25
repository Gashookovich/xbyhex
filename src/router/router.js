import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import WorkingComponent from "@/components/WorkingComponent";
import AboutMeComponent from "@/components/AboutMeComponent";
import AducationComponent from "@/components/AducationComponent";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/working',
        component: WorkingComponent
    },
    {
        path: '/about',
        component: AboutMeComponent
    },
    {
        path: '/aducation',
        component: AducationComponent
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;