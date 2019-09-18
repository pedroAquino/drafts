import React, { useState } from 'react';
import createContext from './createContext';

const inc = x => x + 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { title: `Blog Post #${inc(state.length)}` }]
        default:
            return state
    }
};
const actions = {
    addBlogPost: dispatch => () => dispatch({ type: 'ADD_BLOG_POST' })
};
const initialState = [];

export const { Context, Provider } = createContext({
    reducer,
    actions,
    initialState
}); 


// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, setBlogPosts] = useState([]);

//     const blogState = {
//         blogPosts,
//         addBlogPost: () => setBlogPosts([...blogPosts, {
//             title: `Blog Post #${inc(blogPosts.length)}`
//         }])
//     };

//     return (
//         <BlogContext.Provider value={blogState} >
//             {children}
//         </BlogContext.Provider>
//     );
// };

// export default BlogContext;