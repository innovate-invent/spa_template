import { shallowMount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';
import routes from '@/router/main';
import { PageRoute } from '@/@types/pageprops';
import { RouteConfig } from 'vue-router';

describe('Navigation.vue', () => {
    it('renders menu items from router', () => {
        const wrapper = shallowMount(Navigation, {
            propsData: { routes }
        });
        // @ts-ignore
        expect(
            wrapper.vm.pages.find(
                (r: PageRoute | RouteConfig) => r.path === '/'
            )
        ).not.toBeDefined();
    });
});
