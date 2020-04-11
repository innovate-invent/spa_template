<template>
    <v-tabs>
        <slot name="before" />
        <v-tab v-for="page in pages" :key="page.meta.slug" :to="page.path">
            {{ page.meta.title || page.meta.slug || page.name }}
        </v-tab>
        <slot />
        <slot name="after" />
    </v-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
import { PageRoute } from '@/@types/pageprops';

@Component
export default class Navigation extends Vue {
    @Prop(Array) readonly routes!: (RouteConfig | PageRoute)[];

    get pages(): (RouteConfig | PageRoute)[] {
        return this.routes.filter(
            route => route.meta && route.meta.nav !== undefined
        );
    }
}
</script>

<style scoped></style>
