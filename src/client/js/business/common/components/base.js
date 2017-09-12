import React from 'react';
import {css} from 'emotion';
import Nav from './nav';

const style = css`
    margin: 20px auto;
  `;

const Base = ({children}) =>
    (<div className={style}>
        <Nav/>
        {children}
    </div>);

export default Base;
