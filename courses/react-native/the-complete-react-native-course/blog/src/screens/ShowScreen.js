//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// create a component
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);
    const id = navigation.getParam('id');
    const blogPost = state.find(blogPost => blogPost.id === id);
    
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>{blogPost.title}</Text>
                <Text>{blogPost.content}</Text>
            </View>
        </>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => ({
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { id:  navigation.getParam('id')})}>
            <Feather name="edit" size={30} />
        </TouchableOpacity>
    )
});

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
