import { EMAIL_CHANGED } from '../constants';

const INITIAL_STATE = {
    email: '',
    password: 'test',
    address: {
        line1: 'address_line1',
        line2: 'address_line2',
        city: 'Hyderabad'
    }
}

const accountReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        default:
            return state;
    }
}

export default accountReducer;