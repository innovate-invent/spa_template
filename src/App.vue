<template>
    <v-app id="app">
        <v-app-bar absolute app dense>
            <Navigation :routes="routes" />
        </v-app-bar>

        <v-content>
            <v-container fluid>
                <router-view :class="($route.meta && $route.meta.slug) || ''" />
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

import routes from '@/router/main';

@Component({
    components: { Navigation }
})
export default class App extends Vue {
    private routes = routes;
}
</script>

<style scoped></style>

<style lang="scss">
@import '@/assets/main.scss';
</style>
