//import {reducer as formReducer} from 'redux-form';

import {actionTypes} from './actions';

const initialState = {error: ''};

export const general = (state = initialState, {type, payload}) => {
    switch (type) {
    case actionTypes.error.SET:
        return {
            ...state,
            error: payload,
        };
    default:
        return state;
    }
};

export default {
    //form: formReducer,
    general,
};
