import React from 'react';
import universal from 'react-universal-component';

const Nav = universal(props => import('./components/nav'));

export default props => <Nav />;
