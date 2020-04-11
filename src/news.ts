const news: { title: string; body: string; date: string }[] = [];

/* eslint-disable @typescript-eslint/explicit-function-return-type */
(context => {
    context.keys().forEach(key => {
        const n = context(key);
        news.push({
            title: n.attributes.title,
            date: n.attributes.date,
            body: n.html
        });
    });
})(require.context('#/news/', false, /\.md$/));

export default news;
