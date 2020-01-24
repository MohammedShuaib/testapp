 import {
     EMAIL_CHANGED,
     FIELD_UNHANDLED
 } from '../constants';
 import axios from 'axios';

 const userDetails = uid => dispatch => {
     console.log('-----User Details Called-----');
    // dispatch({ type: 'LOGIN' });

    return axios.get('https://www.google.com')
        .then(res => {
            console.log("Response", res);

            dispatch({ 
                type: 'LOGIN_SUCCESS',
                payload: {
                    success: true
                }
            });
        })
        .catch(error => {
                    dispatch({
                        type: 'LOGIN_FAIL',
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