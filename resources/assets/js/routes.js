/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Extends Vue to use Vue Router
 */
Vue.use(VueRouter)

/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */
import layout from "./pages/Layout.vue"
import Home from "./pages/Home.vue"
import Cafes from "./pages/Cafes.vue"
import NewCafe from "./pages/NewCafe.vue"
import Cafe from "./pages/Cafe.vue"
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'layout',
            component:layout,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'cafes',
                    name: 'cafes',
                    component: Cafes,
                },
                {
                    path: 'cafes/new',
                    name: 'newcafe',
                    component: NewCafe
                },
                {
                    path: 'cafes/:id',
                    name: 'cafe',
                    component: Cafe
                }
            ]
        }
    ]
});