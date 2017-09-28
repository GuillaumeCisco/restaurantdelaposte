import React from 'react';
import {connect} from 'react-redux';

import Switcher from '../client/js/business/common/components/switcher/index';
import ServiceWorker from '../client/js/business/common/components/serviceWorker';
import routes from './routesMap';

const Routes = ({location}) =>
    <div>
        <ServiceWorker/>
        {Object.keys(routes).includes(location.type) ?
            <Switcher page={location.type}/> :
            <h1>Not Found</h1>}
    </div>;

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

export default connect(mapStateToProps)(Routes);
