import { combineReducers } from 'redux';
import types from './types';
import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';

function postsReducer(state={}, action) {
    switch(action.type) {
        case types.FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        break;
        case types.FETCH_POST:
            const post = action.payload.data;
            return { ...state, [post.id]: post }
        break;
        case types.DELETE_POST:
            return _.omit(state, action.payload);
        break;
        default:
            return state;
        break;
    }
}

const reducer = combineReducers({
    posts: postsReducer,
    form: formReducer
});

export default reducer;
