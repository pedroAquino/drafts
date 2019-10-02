import createContext from './createContext';
import trackApi from '../api/trackApi';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const initialState = {
    token: null,
    signIn: {
        errorMessage: '',
        loading: false
    },
    signUp: {
        errorMessage: '',
        loading: false
    }
};

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_LOADING':
            return { ...state, signIn: { errorMessage: '', loading: true } }
        case 'SIGNIN_ERROR':
            return {...state, signIn: { errorMessage: action.payload, loading: false } }
        case 'SIGNIN_SUCCESS':
            return {...state,  token: action.payload, signIn: { errorMessage: '', loading: false } }
        default:
            return state;
    }
};

const signUpReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case 'SIGNUP_LOADING':
            return { ...state, signUp: { errorMessage: '', loading: true } }
        case 'SIGNUP_ERROR':
            return {...state, signUp: { errorMessage: action.payload, loading: false } }
        case 'SIGNUP_SUCCESS':
            return {...state,  token: action.payload, signUp: { errorMessage: '', loading: false } }
        default:
            return state;
    }
};

const reducer = (state = initialState, action) => {
    const actionType = action.type.split('_')[0];
    
    switch (actionType) {
        case 'SIGNIN':
            return signInReducer(state, action);
        case 'SIGNUP':
            return signUpReducer(state, action);
        default:
            return state
    }
}


const actions = {
    signUp: dispatch => user => {
        dispatch({ type: 'SIGNUP_LOADING' })
        trackApi.post('/signup', user)
            .then(response => {
                AsyncStorage.setItem('token', response.data.token);
                dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data.token });
                navigate('TrackList');
            })
            .catch(error => dispatch({ type: 'SIGNUP_ERROR', payload: 'something wrong with signup' }));
    },
    signIn: dispatch => user => {
        dispatch({ type: 'SIGNIN_LOADING' })
        trackApi.post('/signin', user)
            .then(response => {
                AsyncStorage.setItem('token', response.data.token);
                dispatch({ type: 'SIGNIN_SUCCESS', payload: response.data.token });
                navigate('TrackList');
            })
            .catch(error => dispatch({ type: 'SIGNIN_ERROR', payload: 'something wrong with signin' }));
    }
};

export const getSigninState = ({ token,  signIn }) => ({ token, ...signIn });

export const getSignUpState = ({ token, signUp }) => ({ token, ...signUp });

export const { Context, Provider } = createContext({
    reducer,
    actions,
    initialState
});

