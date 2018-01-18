import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'react-emotion';
import {TransitionGroup, Transition} from 'transition-group';

import './index.css';
import Nav from '../nav';


const style = css`
    height: 100%;
  `;

const group = css`
    position: relative;
    margin: 0 auto;
    height: 100%;
`;

const Container = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  `;

const Switcher = ({children, page}) => (
    <div className={style}>
        <Nav />
        <TransitionGroup
            component="div"
            className={group}
            prefix="fade"
            duration={300}
            enterDelay={300}
            leaveDelay={0}
        >
            <Transition key={page}>
                <Container>
                    {children}
                </Container>
            </Transition>
        </TransitionGroup>
    </div>
);


Switcher.propTypes = {
    children: PropTypes.node.isRequired,
    page: PropTypes.string.isRequired,
};

export default Switcher;
