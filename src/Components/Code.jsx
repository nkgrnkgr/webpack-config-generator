import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PrettifiedCode from 'react-code-prettify';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 1,
        color: theme.palette.text.secondary,
    },
    prettyprint: {
        padding: 5
    }
});


class Code extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant="headline">
                        webpack.config.js
                    </Typography>
                    <pre>
                        <PrettifiedCode language="javascript" className={classes.prettyprint}
                                        codeString={createCode(this.props.data)}/>
                    </pre>
                </Paper>
            </div>
        )
    }
}

const createCode = (data) => {
    return `
const path = require('path');
${vueLoaerPlugin(data)}
module.exports = {${modes(data.mode)}
  entry: '${data.entryFile}',
  output: {
    path: path.resolve(__dirname, '${data.output.path}'),
    filename: '${data.output.filename}',
  },${devServers(data)}${modules(data)}${plugins(data)}
};

`;
};

const vueLoaerPlugin = (data) => {

    return data.flamework === 'Vue' ? `const VueLoaderPlugin = require('vue-loader/lib/plugin')\n` : '';

};

const modes = (mode) => {
    return mode === 'none' ? '' : `\n  mode: '${mode}',`;
};

const devServers = (data) => {
    if (data.devServer === 'none') {
        return '';
    }
    return `
  devServer: {
    contentBase: path.resolve(__dirname, '${data.output.path}'),
    host: '127.0.0.1',
    port: '8080',
    open: true,
  },`;
};

const modules = (data) => {

    if (data.flamework === 'none' && data.stylesheet === 'none') {
        return '';
    }

    if (data.flamework === 'Vue') {
        return `
  module: {
    rules: [
      {
        test: /\\.vue$/,
        loader: 'vue-loader'
      },
      ${stylesheetsVue(data.stylesheet)}${flameworks(data.flamework)}
    ]
  },`;
    }

    return `
  module: {
    rules: [${stylesheets(data.stylesheet)}${flameworks(data.flamework)}
    ]
  },${resolves(data.flamework)}`;
};

const stylesheets = (name) => {

    let style = '';
    let extension = 'css';

    if (name === 'none') {
        return '';
    }

    if (name === 'sass') {
        extension = 'scss';
        style = `
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          'import-glob-loader',`;
    }

    if (name === 'postCSS') {
        style = `
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            },
          },`;
    }

    return `{
        test: /\\.${extension}/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true,
              importLoaders: 1
            },
          },${style}
        ],
      },`;
};

const stylesheetsVue = (name) => {

    let style = '';
    let extension = 'css';

    if (name === 'none') {
        return '';
    }

    if (name === 'sass') {
        extension = 'scss';
        style = `
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          'import-glob-loader',`;
    }

    if (name === 'postCSS') {
        style = `
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            },
          },`;
    }

    return `{
        test: /\\.${extension}/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true,
              importLoaders: 1
            },
          },${style}
        ],
      },`;
};

const flameworks = (name) => {

    if (name === 'none') {
        return '';
    }

    let flame = `
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}], ${name === 'react' ? `'react',` : ''}
              ],
            },
          },
        `;

    return `
      {
        test: /\\.js(x)?$/,
        use: [${flame}],
      },`;
};

const resolves = (name) => {
    if (name !== 'react') {
        return '';
    }
    return `
  resolve: {
    extensions: ['.js', '.jsx'],
  }`
};

const plugins = (data) => {

    if (data.flamework !== 'Vue') {
        return '';
    }

    return `
  plugins: [
    new VueLoaderPlugin()
  ],`;
};


export default withStyles(styles)(Code);
