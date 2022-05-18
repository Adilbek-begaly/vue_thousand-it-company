import MainPage from '@/components/page/MainPage'
import PostPage from '@/components/page/PostPage'
import PostId from '@/components/page/PostId'
import AboutPage from '@/components/page/AboutPage'
import { createRouter, createWebHistory } from 'vue-router';




const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path:'/posts/:id',
        component: PostId,
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(),
})

export default router;