import React from 'react';
import universal from 'react-universal-component';

const Universal = universal(props => import('../menu/components/index'));

export default props => <Universal />;
