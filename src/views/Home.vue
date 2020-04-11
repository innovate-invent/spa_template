<template>
    <v-container class="Home">
        <v-row>
            <v-col class="welcome">
                <Welcome />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="examples">
                <h1>Getting Started</h1>
                <Examples />
            </v-col>
            <v-col>
                <h1>News and Updates</h1>
                <News :value="news" />
                <router-link to="/news">View more...</router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import News from '@/components/News.vue';

import news from '@/news';
import Welcome from '#/welcome.md';
import Examples from '#/examples.md';

@Component({
    components: {
        News,
        Welcome: Welcome.vue.component,
        Examples: Examples.vue.component
    }
})
export default class Home extends Vue {
    private news = news;
}
</script>

<style scoped>
.News + a {
    display: block;
    border-radius: 0.25rem;
    /*background: #d4dcef;*/
    text-align: center;
    margin-left: -2px;
    margin-right: -2px;
    color: grey;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.03);
}

.welcome >>> img:first-of-type {
    max-height: 8em;
    float: right;
}

.welcome >>> p:first-of-type {
    padding-top: 2em;
}
</style>
