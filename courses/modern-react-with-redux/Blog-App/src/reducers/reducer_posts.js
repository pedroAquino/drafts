import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions/index';

export default function(state={}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        break;
        case FETCH_POST:
            const post = action.payload.data;
            return { ...state, [post.id]: post }
        break;
        //case CREATE_POST:
            
        //break;
        default:
            return state;
        break;
    }
}
