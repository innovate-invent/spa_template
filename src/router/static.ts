import { PageRoute, Pages } from '@/@types/pageprops';

const pages: { [key: string]: Pages } = {};

/* eslint-disable @typescript-eslint/explicit-function-return-type */
(context => {
    context.keys().forEach(key => {
        const page = context(key);
        if (typeof page.attributes.nav === 'number') pages[key] = page;
    });
})(require.context('#', false, /\.md$/));

const routes: PageRoute[] = Object.values(pages).map(page => ({
    path: page.attributes.path || `/${page.attributes.slug}`,
    component: page.vue.component,
    name:
        page.attributes.slug[0].toUpperCase() +
        page.attributes.slug.slice(1).toLowerCase() +
        'MarkdownView',
    props: page.attributes,
    meta: page.attributes
}));

export default routes;
