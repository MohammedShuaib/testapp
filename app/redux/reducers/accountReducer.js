import { EMAIL_CHANGED } from '../constants';
const INITIAL_STATE = {
    uid: '',
    ev: '',
    pv: '',
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
        case 'LOGIN': {
            return { ...state, isLoading: true };
        }
        case 'LOGIN_SUCCESS': {
            console.log("------Success------", action);
            return { ...state };
        }
        case 'LOGIN_FAIL': {
            console.log("------Failure------", action);
            return {
                ...state
            };
        }
        default:
            return state;
    }
}

export default accountReducer;