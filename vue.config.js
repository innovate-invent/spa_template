const mdDeflist = require('markdown-it-deflist');
const path = require('path');
const Mode = require('frontmatter-markdown-loader/mode');

module.exports = {
    publicPath: process.env.BASE_URL,
    parallel: true,
    devServer: {
        disableHostCheck: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '#': path.resolve(__dirname, 'static/')
            }
        },
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: 'frontmatter-markdown-loader',
                            options: {
                                mode: [Mode.VUE_COMPONENT, Mode.HTML],
                                markdownIt: {
                                    preset: 'default',
                                    html: true,
                                    use: [mdDeflist]
                                }
                            }
                        },
                        {
                            loader: 'string-replace-loader',
                            options: {
                                search: '\\[([^\\]]+)\\]\\(#(/[^\\)]*)\\)',
                                replace: (match, label, path) =>
                                    `<router-link to="${path}">${label}</router-link>`,
                                flags: 'g'
                            }
                        }
                    ]
                }
            ]
        }
    }
};
