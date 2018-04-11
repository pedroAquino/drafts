import axios from 'axios';
import actions from './actions';
import types from './types';
import { call, put, takeEvery } from 'redux-saga/effects';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'pedroAquino1234';

function* fetchPostsApi(action) {
    try {
        const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
        const posts = yield call(request);
        yield put({ type: types.FETCH_POSTS_SUCCEEDED, posts: posts });
    } catch(e) {
        yield put({ type: types.FETCH_POSTS_FAILED, message: e.message });
    }
}

function* fetchPostsSaga() {
    yield takeEvery(types.FETCH_POSTS, fetchPostsApi);
}

export default fetchPostsSaga;
