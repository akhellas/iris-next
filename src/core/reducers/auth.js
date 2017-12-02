import { REGISTER, LOGIN } from '../constants/actions';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null
            };
        default:
            return state;
    }

    return state;
};