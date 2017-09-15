import React from 'react';
import {connect} from 'react-redux';

import Switcher from '../client/js/business/common/components/switcher/index';
import routes from './routesMap';

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(({location}) =>
    Object.keys(routes).includes(location.type) ? <Switcher page={location.type} /> : <h1>Not Found</h1>,
);
