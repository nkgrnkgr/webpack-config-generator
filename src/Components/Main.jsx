import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Option from './Option';
import Utils from '../Utils';
import Code from "./Code";
import Modules from "./Modules";

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 20,
    },
});

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

const modules = {
    webpack: ['webpack', 'webpack-cli'],
    devServer: ['webpack-dev-server'],
    react: ['babel-core', 'babel-loader', 'babel-preset-env', 'babel-preset-react', 'react', 'react-dom'],
    Vue: ['babel-core', 'babel-loader', 'babel-preset-env', 'file-loader', 'vue', 'vue-loader', 'vue-template-compiler'],
    css: ['css-loader', 'style-loader'],
    sass: ['css-loader', 'import-glob-loader', 'node-sass', 'sass-loader', 'style-loader'],
    postCSS: ['autoprefixer', 'css-loader', 'postcss-loader', 'style-loader'],
};

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            mode: config.mode[0],
            entryFile: config.entryFile,
            output: config.output,
            flamework: config.flamework[0],
            stylesheet: config.stylesheet[0],
            devServer: config.devServer[0],
        };
        this._handleChange = this._handleChange.bind(this);
    }


    _handleChange = ({name, value}) => {
        let copyState = Object.create(this.state, {});
        Utils.update(copyState, name, value, '_');
        this.setState(copyState);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Option data={this.state} config={config} handleChange={this._handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Modules data={this.state} modules={modules} />
                        <Code data={this.state}/>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(Main);
