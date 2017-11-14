import React from 'react';
import universal from 'react-universal-component';

// need to pass different path for generating different chunks
//https://github.com/faceyspacey/babel-plugin-universal-import#caveat
export default universal(import('../../menu/components'));
