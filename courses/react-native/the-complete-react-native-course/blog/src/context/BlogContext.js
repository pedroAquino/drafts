import React, { useState } from 'react';

const inc = x => x + 1;
 
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const blogState = {
        blogPosts,
        addBlogPost: () => setBlogPosts([...blogPosts, {
            title: `Blog Post #${inc(blogPosts.length)}`
        }])
    };

    return (
        <BlogContext.Provider value={blogState} >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;