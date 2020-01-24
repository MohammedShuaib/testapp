 import {
     EMAIL_CHANGED,
     FIELD_UNHANDLED
 } from '../constants';
 import axios from 'axios';

 const userDetails = uid = dispatch => {
     console.log('-----User Details Called-----');
    // dispatch({ type: 'LOGIN' });

    return axios.get('http://34.70.55.152/api/v1/userdetails')
        .then(res => {
            console.log("Response", res);

            dispatch({ 
                type: 'LOGIN_SUCCESS',
                payload: res
            });
        });
    
    
};

const fieldChanged = (name, value) => {
    switch (name) {
        case 'EMAIL':
            return {
                type: EMAIL_CHANGED,
                    payload: value
            };

        default:
            return {
                type: FIELD_UNHANDLED,
                    payload: value
            };
    }
}

export {
    fieldChanged,
    userDetails
};