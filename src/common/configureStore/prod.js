import {connectRoutes} from 'redux-first-router';
import {applyMiddleware, compose} from 'redux';
import {createInjectSagasStore, sagaMiddleware} from 'redux-sagas-injector';

import options from '../options';
import rootSaga from '../sagas';
import rootReducer from '../reducer';
import routesMap from '../routesMap';

const configureStore = (history, initialState) => {
    const {reducer, middleware, enhancer, thunk, initialDispatch} = connectRoutes(history, routesMap, {
        initialDispatch: false,
        ...options,
    }); // yes, 5 redux aspects

    const enhancers = [
        // create the saga middleware
        applyMiddleware(sagaMiddleware, middleware),
    ];

    const reducers = {...rootReducer, location: reducer};
    const store = createInjectSagasStore({rootSaga}, reducers, initialState, compose(enhancer, ...enhancers));
    initialDispatch();

    return {store, thunk};
};

export default configureStore;
