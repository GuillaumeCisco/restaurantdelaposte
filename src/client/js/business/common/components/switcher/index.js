import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import { TransitionGroup, Transition } from 'transition-group'

import HomeRoutes from '../../../home/routes';
import MenuRoutes from '../../../menu/routes';
import ProductRoutes from '../../../product/routes';
import EventRoutes from '../../../events/routes';
import ContactRoutes from '../../../contact/routes';

import './index.css';
import Nav from '../nav';

const getComponent = page => {
    switch (page) {
    case 'HOME':
        return <HomeRoutes/>;
    case 'MENU':
        return <MenuRoutes/>;
    case 'PRODUCTS':
        return <ProductRoutes/>;
    case 'EVENTS':
        return <EventRoutes/>;
    case 'CONTACT':
        return <ContactRoutes/>;
    }
};

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

const Switcher = ({page}) =>
    <div className={style}>
        <Nav/>
        <TransitionGroup
            component={'div'}
            className={group}
            prefix='fade'
            duration={300}
            enterDelay={300}
            leaveDelay={0}
        >
            <Transition key={page}>
                <Container>
                    {getComponent(page)}
                </Container>
            </Transition>
        </TransitionGroup>;
    </div>;


export default Switcher;
