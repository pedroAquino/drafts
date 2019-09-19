import React, { useState } from 'react';
import createContext from './createContext';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BLOG_POST':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 9999),
                    ...action.payload 
                }
            ]
        case 'EDIT_BLOG_POST':
            return state.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost);
        case 'DELETE_BLOG_POST':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state
    }
};
const actions = {
    addBlogPost: dispatch => (blogPost, callBack) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: blogPost });
        callBack();
    },
    editBlogPost: dispatch => (blogPost, callBack) => {
        dispatch({ type: 'EDIT_BLOG_POST', payload: blogPost });
        callBack();
    },
    deleteBlogPost: dispatch => id => dispatch({ type: 'DELETE_BLOG_POST', payload: id })
};
const initialState = [
    {
        id: Math.floor(Math.random() * 9999),
        title: 'Some Blog Post',
        content: 'Some Blog Post Content'
    }
];

export const { Context, Provider } = createContext({
    reducer,
    actions,
    initialState
}); 