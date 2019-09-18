//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

// create a component
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);
    const id = navigation.getParam('id');
    const blogPost = state.find(blogPost => blogPost.id === id);
    
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>{blogPost.title}</Text>
            </View>
        </>
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
export default ShowScreen;
