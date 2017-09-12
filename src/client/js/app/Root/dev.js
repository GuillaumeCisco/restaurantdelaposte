/* globals document */

import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from 'material-ui/styles';

import DevTools from '../../../../common/DevTools';
import theme from '../../../../common/theme';

import Routes from '../../../../common/routes';

class Root extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return (<Provider store={this.props.store}>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Routes />
                    <DevTools />
                </div>
            </MuiThemeProvider>
        </Provider>);
    }
}

Root.propTypes = {
    store: PropTypes.shape({}).isRequired,
};

export default Root;
