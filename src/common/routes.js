import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'react-emotion';

import Switcher from '../client/js/business/common/components/switcher/index';
import ServiceWorker from '../client/js/business/common/components/serviceWorker';
import routes from './routesMap';

const Container = styled('div')`
    height: 100%;
`;

const Routes = ({location}) =>
    (<Container>
        <ServiceWorker />
        {Object.keys(routes).includes(location.type) ?
            <Switcher page={location.type} /> :
            <h1>Not Found</h1>}
    </Container>);

Routes.propTypes = {
    location: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Routes);
