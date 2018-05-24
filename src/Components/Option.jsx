import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/es/TextField/TextField";

const styles = theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    inputTitle: {
        marginTop: '6px',
        marginRight: '10px',
    }
});


class Option extends React.Component {

    state = {
        name: './src/index.js',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                {/*<Typography variant={} className={classes.inputTitle}>*/}
                    {/*Entry file:*/}
                {/*</Typography>*/}
                <TextField
                    id="name"
                    label="Entry file"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </form>
        )
    }

};

export default withStyles(styles)(Option);