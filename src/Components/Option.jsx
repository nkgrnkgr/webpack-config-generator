import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/es/TextField/TextField";
import Radio from '@material-ui/core/Radio';

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
        width: 270,
    },
    inputTitle: {
        marginTop: '6px',
        marginRight: '10px',
        width: 100,
    },
    label: {
        cursor: 'pointer',
    }
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
        const config = this.props.config;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Paper className={classes.paper}>
                    <Typography variant="headline" className={classes.inputTitle}>
                        Mode
                    </Typography>
                    <div>
                        {config.mode.map((item, index) => {
                            return (
                                <label className={classes.label} key={item+index}>
                                    <Radio
                                        checked={this.props.data.mode === item}
                                        onChange={this._handleChange}
                                        value={item}
                                        name="mode"
                                        aria-label={item}
                                    />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </Paper>
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
                        id="output.path"
                        label="Path"
                        name="output_path"
                        className={classes.textField}
                        value={this.props.data.output.path}
                        onChange={this._handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="output.filename"
                        label="Filename"
                        name="output_filename"
                        className={classes.textField}
                        value={this.props.data.output.filename}
                        onChange={this._handleChange}
                        margin="normal"
                    />
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant="headline" className={classes.inputTitle}>
                        Flamefork
                    </Typography>
                    <div>
                        {config.flamework.map((item, index) => {
                            return (
                                <label className={classes.label} key={item+index}>
                                    <Radio
                                        checked={this.props.data.flamework === item}
                                        onChange={this._handleChange}
                                        value={item}
                                        name="flamework"
                                        aria-label={item}
                                    />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant="headline" className={classes.inputTitle}>
                        Stylesheet
                    </Typography>
                    <div>
                        {config.stylesheet.map((item, index) => {
                            return (
                                <label className={classes.label} key={item+index}>
                                    <Radio
                                        checked={this.props.data.stylesheet === item}
                                        onChange={this._handleChange}
                                        value={item}
                                        name="stylesheet"
                                        aria-label={item}
                                    />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant="headline" className={classes.inputTitle}>
                        devServer
                    </Typography>
                    <div>
                        {config.devServer.map((item, index) => {
                            return (
                                <label className={classes.label} key={item+index}>
                                    <Radio
                                        checked={this.props.data.devServer === item}
                                        onChange={this._handleChange}
                                        value={item}
                                        name="devServer"
                                        aria-label={item}
                                    />
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </Paper>
            </form>
        )
    }
};

export default withStyles(styles)(Option);