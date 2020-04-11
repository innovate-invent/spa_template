declare module '*.html' {
    const value: string;
    export default value;
}

declare module '*.json' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}

declare module '*.md' {
    import FrontMatter from 'frontmatter-markdown-loader';
    const value: FrontMatter;
    export default value;
}
