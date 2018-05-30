import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PrettifiedCode from 'react-code-prettify';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 1,
        color: theme.palette.text.secondary,
    },
});


class Code extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <h3>webpack.config.js</h3>
                    <pre>
                        <PrettifiedCode language="javascript" codeString={createCode(this.props.data)}/>
                    </pre>
                </Paper>
            </div>
        )
    }
}

const createCode = (data) => {
    return `module.exports = {${modes(data)}
  entry: '${data.entryFile}',
  output: {
    path: '${data.output.path}',
    filename: '${data.output.filename}',
  },${modules(data)}
};

`;
};

const modes = (data) => {
    return data.mode === 'none' ? '' : `\n  mode: '${data.mode}',`;
};

const modules = (data) => {

    if (data.flamework === 'none' && data.stylesheet === 'none') {
        return '';
    }

    return `
  module: {
    rules: [${stylesheets(data.stylesheet)}${flameworks(data.flamework)}
    ]
  }`;
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
        `;
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

const flameworks = (name) => {

    let flame;

    if (name === 'none') {
        return '';
    }

    if (name === 'react') {
        flame = `
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ],
            },
          }
        `;
    }

    return `
      {
        test: /\\.js?$/,
        use: [${flame}],
      },`;
};


export default withStyles(styles)(Code);
