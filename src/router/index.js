import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../views/welcome/index.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/home/index.vue")
    },
    {
        path: "/faq",
        name: "Faq",
        component: () => import("../views/faq/index.vue") 
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior(to, from, saveTop) {
        if(saveTop) {
            return saveTop;
        }else {
            return { x: 0, y: 0 };
        }
    }
});



export default router;