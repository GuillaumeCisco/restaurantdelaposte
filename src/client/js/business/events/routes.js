import React from 'react';
import universal from 'react-universal-component';

// need to pass different path for generating different chunks
const Universal = universal(import('../events/components/index'));

export default Universal;
