import React from 'react';
import universal from 'react-universal-component';

const Universal = universal(props => import('../product/components/index'));

export default props => <Universal />;
