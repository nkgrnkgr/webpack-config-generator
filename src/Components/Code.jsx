import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
        console.log(JSON.stringify(this.props.data, null, "\t"));
        return (
            <div>
                <Paper className={classes.paper}>
                    <h3>webpack.config.js</h3>
                    {"aaaa " + this.props.data.mode}
                    <pre className="prettyprint">
                        <code className="lang-js">
                    {"aaaa " + this.props.data.mode}
                        </code>
                    </pre>
                </Paper>
                {"aaaa " + this.props.data.mode}
            </div>
        )
    }
}

const createCode = (mode) => {

    const r = `module.exports = {
    module: {
        ${mode === 'none' ? '' : 'mode: ' + mode + ','}
        rules: [{
            test: /\\.scss/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: true,
                        importLoaders: 2
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            ],
        }, ],
    },
};`;
    console.log(mode);
    return r;
};


export default withStyles(styles)(Code);
