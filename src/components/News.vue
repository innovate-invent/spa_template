<template>
    <v-item-group class="News">
        <v-card v-for="(item, index) of value" :key="index">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{
                new Date(item.date).toDateString()
            }}</v-card-subtitle>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <v-card-text v-html="item.body" />
        </v-card>
    </v-item-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import news from '@/news';

@Component
export default class News extends Vue {
    @Prop(Array) value!: typeof news;
}
</script>

<style scoped></style>
