//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

// create a component
const AddScreen = ({ navigation }) => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const { actions } = useContext(BlogContext);
    const onSave =  () => navigation.navigate('IndexScreen');

    return (
        <View>
            <View style={styles.header}>
                <Text>AddScreen</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label} >title</Text>
                <TextInput style={styles.input} value={title} onChangeText={setTitle}  />
                <Text style={styles.label} >content</Text>
                <TextInput style={[styles.input, styles.inputContent]} value={content} onChangeText={setContent}  />
            </View>
            <Button style={styles.button} title="Save" onPress={() => actions.addBlogPost({ title, content }, onSave)} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 16
    },
    content: {
        paddingHorizontal: 16
    },
    label: {
        marginTop: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        height: 35
    },
    inputContent: {
        height: 100
    },
    button: {
        marginTop: 16
    }
});

//make this component available to the app
export default AddScreen;
