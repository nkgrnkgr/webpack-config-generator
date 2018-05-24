import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {

    footer: {
        textAlign: 'center',
        backgroundColor: '#eeeeee',
        padding: 20
    },
    iconImage: {
        verticalAlign: 'baseline',
    },
    atext: {
        color: '#3f51b5',
        textDecoration: 'none',
    }
};

const Footer = props => {

    const {classes} = props;
    return (
        <footer className={classes.footer}>
            <Typography>
                created by <a href={'https://twitter.com/nkgrnkgr'} className={classes.atext}>@nokogori</a>
            </Typography>
            <Typography variant="body2" >
                <a href={'https://github.com/nkgrnkgr'} className={classes.atext}>Github </a>
                <img className={classes.iconImage} height="20" width="20" src="https://unpkg.com/simple-icons@latest/icons/github.svg" />
            </Typography>
        </footer>
    );
};

export default withStyles(styles)(Footer);