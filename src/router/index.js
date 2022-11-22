import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard.vue'
import gridsystem from '../views/gridsystem.vue'
import projectmanager from '../views/projectmanager.vue'
import projectview from '../views/projectview.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/gridsystem',
        name: 'gridsystem',
        component: gridsystem
    },
    {
        path: '/projectmanager',
        name: 'projectmanager',
        component: projectmanager
    },
    {
        path: '/projectview',
        name: 'projectview',
        component: projectview
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
