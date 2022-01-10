import { createRouter, createWebHistory} from 'vue-router'
// import Home from "../components/Home";
import Login from "../components/Login";
import Home from "../components/Home";
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;