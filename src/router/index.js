import { createRouter, createWebHistory} from 'vue-router'
// import Home from "../components/Home";
import Login from "../components/Login";
import Home from "../components/Home";
import Welcome from "../components/Welcome";
import Users from "../components/Users";
import Information from "../components/Information";
import Couple from "../components/Couple";
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
        component: Home,
        redirect: '/welcome',
        children: [{ path: '/welcome', component: Welcome },
            { path: '/users', component: Users},
            { path: '/information', component: Information },
            { path: '/cp', component: Couple }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;