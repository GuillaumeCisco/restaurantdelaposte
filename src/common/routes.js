import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Base from '../client/js/business/common/components/base';
import HomeRoutes from '../client/js/business/home/routes';
import MenuRoutes from '../client/js/business/menu/routes';
import ProductRoutes from '../client/js/business/product/routes';
import EventRoutes from '../client/js/business/events/routes';
import ContactRoutes from '../client/js/business/contact/routes';

const mapStateToProps = ({location}, ownProps) => ({location, ...ownProps});

Base.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.shape({}),
    ]).isRequired,
};

export default connect(mapStateToProps)(({location}) => {
    switch (location.type) {
    case 'HOME':
        return <Base><HomeRoutes/></Base>;
    case 'MENU':
        return <Base><MenuRoutes/></Base>;
    case 'PRODUCTS':
        return <Base><ProductRoutes/></Base>;
    case 'EVENTS':
        return <Base><EventRoutes/></Base>;
    case 'CONTACT':
        return <Base><ContactRoutes/></Base>;
    default:
        return <h1>Not Found</h1>;
    }
});
