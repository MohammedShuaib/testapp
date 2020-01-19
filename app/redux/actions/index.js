import {
    EMAIL_CHANGED,
    FIELD_UNHANDLED
} from '../constants';

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
    fieldChanged
}