import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const styles = {
    main: {
        backgroundColor: '#eeeeee'
    }
};

class App extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(App);
