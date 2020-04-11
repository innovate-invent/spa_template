import { PageRoute, Pages } from '@/@types/pageprops';

import Home from '@/views/Home.vue';
import News from '@/components/News.vue';

const pages: { [key: string]: Pages } = {};

/* eslint-disable @typescript-eslint/explicit-function-return-type */
(context => {
    context.keys().forEach(key => {
        const page = context(key);
        if (typeof page.attributes.nav === 'number') pages[key] = page;
    });
})(require.context('#', false, /\.md$/));

const routes: PageRoute[] = [
    { path: '/', component: Home, name: 'Home', meta: { nav: 0 } } as PageRoute,
    ...Object.values(pages).map(page => ({
        path: page.attributes.path || `/${page.attributes.slug}`,
        component: page.vue.component,
        name:
            page.attributes.slug[0].toUpperCase() +
            page.attributes.slug.slice(1).toLowerCase() +
            'MarkdownView',
        props: page.attributes,
        meta: page.attributes
    })),
    {
        path: '/news',
        component: News,
        name: 'News',
        props: { value: require('@/news').default }
    } as PageRoute
].sort((a, b) =>
    a.meta && b.meta && a.meta.nav !== undefined && b.meta.nav !== undefined
        ? a.meta.nav - b.meta.nav
        : 1
);

export default routes;
