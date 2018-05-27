import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Option from './Option';
import Utils from '../Utils';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 20,
    },
});

const config = {
    mode: ['production', 'development', 'none'],
    flamework: ['react', 'Vue', 'none'],
    stylesheet: ['css', 'sass', 'postCSS', 'none'],
};

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            mode: config.mode[2],
            entryFile: './src/index.js',
            output: {
                path: 'public',
                filename: 'bundle.js',
            },
            flamework: config.flamework[2],
            stylesheet: config.stylesheet[3],
        };
        this._handleChange = this._handleChange.bind(this);
    }


    _handleChange = ({name, value}) => {
        let copyState = Object.assign({}, this.state);
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
                        <p>
                            {this.state.mode}
                        </p>
                        <p>
                            {this.state.entryFile}
                        </p>
                        <p>
                            {this.state.output.filename}
                        </p>
                        <p>
                            {this.state.output.path}
                        </p>
                        <p>
                            {this.state.flamework}
                        </p>
                        <p>
                            {this.state.stylesheet}
                        </p>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(Main);
