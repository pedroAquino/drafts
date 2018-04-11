import types from './types';

function fetchPosts() {
    return {
        type: types.FETCH_POSTS,
        payload: 'Ok'
    };
}

function fetchPostsSuceeded(posts) {
    return {
        type: types.FETCH_POSTS_SUCCEEDED,
        posts: posts
    }
}

function fetchPostsFailed() {
    return {
        type: types.FETCH_POSTS_FAILED,
        message: ''
    };
}

function createPost(blogPost, callBack) {
    const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, blogPost)
        .then(() => callBack());

    return {
        type: CREATE_POST,
        payload: request
    };
}

function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)
        .then(() => {
            callback();
        });

    return {
        type: DELETE_POST,
        payload: request
    };
}

export default {
    fetchPosts,
    createPost,
    fetchPost,
    deletePost
};