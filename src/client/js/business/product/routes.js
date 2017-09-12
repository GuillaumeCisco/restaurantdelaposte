import React from 'react';
import universal from 'react-universal-component';

const Home = universal(props => import('./components/index'));

export default props => <Home />;
