import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        marginLeft: 20,
    },
    menuButton: {
        marginRight: -12,
        marginLeft: 20,
    },
};

const Header = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Webpack Config Generator
                    </Typography>
                    <IconButton href="https://material-ui.com/style/icons/" target="_blank" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <CodeIcon>
                        </CodeIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default withStyles(styles)(Header);