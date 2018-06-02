import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 1,
        color: theme.palette.text.secondary,
    },
    code: {
        marginTop: 5,
        padding: 8,
        backgroundColor: '#1d1f21',
        color: '#c5c8c6',
    }
});

class Modules extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant="headline">
                        Modules
                    </Typography>
                    <Typography>
                        Install with npm or yarn.
                    </Typography>
                    <Typography variant="body1" className={classes.code}>
                        {createCommand(this.props.modules, this.props.data)}
                    </Typography>
                </Paper>
            </div>
        )
    }
}

const reducer = (module, currentModule) => {

    if (!module || !currentModule)  {
        return '';
    }
    return module + ' ' + currentModule;
};

const createCommand = (modules, data) => {

    const webpack = modules['webpack'];
    const devServer = data.devServer === 'use' ? modules['devServer'] : [];
    const flamework = data.flamework === 'none' ? [] : modules[data.flamework];
    const stylesheet = data.stylesheet === 'none' ? [] : modules[data.stylesheet];
    const commands = webpack.concat(devServer, flamework, stylesheet);

    return `${commands.reduce(reducer)}`;
};

export default withStyles(styles)(Modules);
