import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/es/TextField/TextField";

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 1,
        color: theme.palette.text.secondary,
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250,
    },
    inputTitle: {
        marginTop: '6px',
        marginRight: '10px',
        width: 100,
    },
});


class Option extends React.Component {

    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange = (event) => {
        this.props.handleChange({
            name: event.target.name,
            value: event.target.value
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Paper className={classes.paper}>
                    <Typography variant="headline" className={classes.inputTitle}>
                        Entry
                    </Typography>
                    <TextField
                        id="entryFile"
                        label="Entry file"
                        name="entryFile"
                        className={classes.textField}
                        value={this.props.data.entryFile}
                        onChange={this._handleChange}
                        margin="normal"
                    />
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant="headline" className={classes.inputTitle}>
                        Output
                    </Typography>
                    <TextField
                        id="outputpath"
                        label="Path"
                        name="output.path"
                        className={classes.textField}
                        value={this.props.data.output.path}
                        onChange={this._handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="outputfilename"
                        label="Filename"
                        name="utput.filename"
                        className={classes.textField}
                        value={this.props.data.output.filename}
                        onChange={this._handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="mode"
                        label="mode"
                        name="mode"
                        className={classes.textField}
                        value={this.props.data.mode}
                        onChange={this._handleChange}
                        margin="normal"
                    />
                </Paper>
            </form>
        )
    }

};

export default withStyles(styles)(Option);