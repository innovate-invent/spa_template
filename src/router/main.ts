import { PageRoute } from '@/@types/pageprops';

import Home from '@/views/Home.vue';
import News from '@/components/News.vue';

const routes: PageRoute[] = [
    { path: '/', component: Home, name: 'Home', meta: { nav: 0 } } as PageRoute,
    {
        path: '/news',
        component: News,
        name: 'News',
        props: { value: require('@/news').default }
    } as PageRoute
];

export default routes;
