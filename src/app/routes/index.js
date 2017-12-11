import React from 'react';

/* Declare routes */
import HomeRoutes from './home/routes/electron';
import MenuRoutes from './menu/routes';
import ProductRoutes from './products/routes';
import EventRoutes from './events/routes';
import ContactRoutes from './contact/routes';


export default (page) => {
    switch (page) {
    case 'HOME':
        return <HomeRoutes />;
    case 'MENU':
        return <MenuRoutes />;
    case 'PRODUCTS':
        return <ProductRoutes />;
    case 'EVENTS':
        return <EventRoutes />;
    case 'CONTACT':
        return <ContactRoutes />;
    default:
        return <h1>Not Found</h1>;
    }
};
