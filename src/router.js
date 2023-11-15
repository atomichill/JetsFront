// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard/Dashboard.vue'
import WelcomePage from './components/AuthServices/WelcomePage.vue'
import Login from './components/AuthServices/Login.vue'
import Register from './components/AuthServices/Register.vue'
import Greet from './components/AuthServices/Greet.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/',
        name: 'home',
        component: WelcomePage,
        children: [
            {
                path: '/',
                name: 'greet',
                component: Greet
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            }
       ]
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
