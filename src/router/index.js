import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import PeoplePage from "@/pages/PeoplePage.vue";
import PersonPage from "@/pages/PersonPage.vue";

const index = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/people',
            component: PeoplePage
        },
        {
            path: '/person/:id',
            component: PersonPage
        }
    ],
})

export default index