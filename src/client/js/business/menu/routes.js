import React from 'react';
import {connect} from 'react-redux';
import universal from 'react-universal-component';

// need to pass different path for generating different chunks
const Universal = universal(props => import('../menu/components/index'));

// need to connect for hot module replacement
export default connect()(props => <Universal />);
