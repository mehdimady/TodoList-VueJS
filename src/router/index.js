import Vue from "vue";
import VueRouter from "vue-router";

import AllWork from "@/components/AllWork";
// import ListTask from "@/components/ListTask.vue";
import ListTaskView from "@/components/ListTaskView";

Vue.use(VueRouter);

const routes = [
    {
        path: "/task/:title",
        name: "task",
        component: ListTaskView,
    },    
    {
        path: "/",
        name: "home",
        component: AllWork,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
