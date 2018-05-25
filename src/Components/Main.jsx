import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import objPath from "object-path";
import Option from './Option';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 20,
    },
});

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'development',
            entryFile: './src/index.js',
            output: {
                path: 'public',
                filename: 'bundle.js',
            },
        }
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange = ({name, value}) => {
        let copyState = Object.create(this.state, {});
        objPath.set(copyState, name, value);
        this.setState(copyState);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Option data={this.state} handleChange={this._handleChange}/>
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
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(Main);
