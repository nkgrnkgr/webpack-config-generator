const modules = {
    webpack: ['webpack', 'webpack-cli'],
    devServer: ['webpack-dev-server'],
    react: ['babel-core', 'babel-loader', 'babel-preset-env', 'babel-preset-react', 'react', 'react-dom'],
    vue: ['babel-core', 'babel-loader', 'babel-preset-env', 'file-loader', 'vue', 'vue-loader', 'vue-template-compiler'],
    css: ['css-loader', 'style-loader'],
    sass: ['css-loader', 'import-glob-loader', 'node-sass', 'sass-loader', 'style-loader'],
    postCSS: ['autoprefixer', 'css-loader', 'postcss-loader', 'style-loader'],
};

const config = {
    mode: ['development', 'production', 'none'],
    entryFile: './src/index.js',
    output: {
        path: 'public',
        filename: 'bundle.js',
    },
    flamework: ['react', 'Vue', 'none'],
    stylesheet: ['css', 'sass', 'postCSS', 'none'],
    devServer: ['use', 'none'],
};

const state = {
    mode: config.mode[0],
    entryFile: config.entryFile,
    output: config.output,
    flamework: config.flamework[0],
    stylesheet: config.stylesheet[0],
    devServer: config.devServer[0],
};

const reducer = (module, currentModule) => {

    if (!module || !currentModule)  {
        return '';
    }
    return module + ' ' + currentModule;
};

let commands = modules['webpack'].concat(modules['devServer'], modules['react'], modules['css']);
console.log(commands);
console.log(commands.reduce(reducer));

