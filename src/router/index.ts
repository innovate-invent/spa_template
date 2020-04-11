import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import main from './main';

const router = new VueRouter({
    routes: main,
    mode: "history",
});

export default router;
