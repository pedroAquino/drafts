import createContext from './createContext';
import trackApi from '../api/trackApi';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const initialState = {
    token: null,
    errorMessage: '',
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_LOADING':
            return { ...state, loading: true }
        case 'SIGNUP_ERROR':
            return {...state, errorMessage: 'Something went wrong with signup', loading: false }
        case 'SIGNUP_SUCCESS':
            return {...state, token: action.payload, errorMessage: '', loading: false }
        default:
            return state;
    }
};

const actions = {
    signUp: dispatch => user => {
        dispatch({ type: 'SIGNUP_LOADING' })
        trackApi
            .post('/signup', user)
            .then(response => {
                AsyncStorage.setItem('token', response.data.token);
                dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data.token });
                navigate('TrackList');
            })
            .catch(error => dispatch({ type: 'SIGNUP_ERROR' }));
    }
};

export const { Context, Provider } = createContext({
    reducer,
    actions,
    initialState
});
