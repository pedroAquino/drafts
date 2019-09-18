import React, { useState } from 'react';
import createContext from './createContext';

const inc = x => x + 1;

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BLOG_POST':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 9999),
                    ...action.payload
                    //title: `Blog Post #${inc(state.length)}` 
                }
            ]
        case 'DELETE_BLOG_POST':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
};
const actions = {
    addBlogPost: dispatch => (blogPost, callBack) => {
        dispatch({ type: 'ADD_BLOG_POST', payload: blogPost });
        callBack();
    },
    deleteBlogPost: dispatch => id => dispatch({ type: 'DELETE_BLOG_POST', payload: id })
};
const initialState = [];

export const { Context, Provider } = createContext({
    reducer,
    actions,
    initialState
}); 