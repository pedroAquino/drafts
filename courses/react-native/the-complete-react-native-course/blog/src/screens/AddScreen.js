//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

// create a component
const AddScreen = ({ navigation }) => {
    const { actions } = useContext(BlogContext);
    const onSave =  () => navigation.navigate('IndexScreen');

    return (
        <View>
            <View style={styles.header}>
                <Text>AddScreen</Text>
            </View>
            <BlogForm 
                onSubmit={(title, content) => actions.addBlogPost({ title, content }, onSave)}
            />
        </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 16
    }
});

//make this component available to the app
export default AddScreen;
