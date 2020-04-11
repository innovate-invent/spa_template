declare module 'frontmatter-markdown-loader' {
    import { VueConstructor } from 'vue';
    interface FrontMatter {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        attributes: { [key: string]: any };
        vue: {
            component: VueConstructor;
        };
        html: string;
    }

    export default FrontMatter;
}
