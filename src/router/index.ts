import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

let routes: RouteConfig[][] = [];

/* eslint-disable @typescript-eslint/explicit-function-return-type */
(context => {
    context.keys().forEach(key => {
        const route = context(key).default;
        if (route) routes.push(route);
    });
})(require.context('.', true, /(?!index)\.ts$/));

const router = new VueRouter({
    routes: ([] as RouteConfig[]).concat(...routes).sort((a, b) =>
        a.meta && b.meta && a.meta.nav !== undefined && b.meta.nav !== undefined
            ? a.meta.nav - b.meta.nav
            : 1
    ),
    mode: 'history'
});

export default router;
