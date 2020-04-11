import { RouteConfig } from 'vue-router';
import FrontMatter from 'frontmatter-markdown-loader';

export interface PageProps {
    title: string;
    slug: string;
    path?: string;
    nav?: number;
}

export interface PageRoute extends RouteConfig {
    props: PageProps | RouteConfig['props'];
}

export interface Pages extends FrontMatter {
    attributes: PageProps;
}
