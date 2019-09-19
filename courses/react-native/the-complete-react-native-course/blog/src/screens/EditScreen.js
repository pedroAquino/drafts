//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

// create a component
const EditScreen = ({ navigation }) => {
    const { state, actions } = useContext(BlogContext);
    const id = navigation.getParam('id');
    const blogPost = state.find(blogPost => blogPost.id === id);
    const onSave =  () => navigation.pop();
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Edit Screen</Text>
            </View>
            <BlogForm 
                initialValues={blogPost}
                onSubmit={(title, content) => actions.editBlogPost({ title, content, id }, onSave)}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 16
    },
    title: {
        fontSize: 24
    }
});

//make this component available to the app
export default EditScreen;
