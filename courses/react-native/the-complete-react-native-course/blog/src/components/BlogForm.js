//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// create a component
const BlogForm = ({ onSubmit, initialValues }) => {
    const [ title, setTitle ] = useState(initialValues.title);
    const [ content, setContent ] = useState(initialValues.content);

    return (
        <View style={styles.content}>
            <Text style={styles.label} >title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}  />
            <Text style={styles.label} >content</Text>
            <TextInput style={[styles.input, styles.inputContent]} value={content} onChangeText={setContent}  />
            <Button style={styles.button} title="Save" onPress={() => onSubmit(title, content)} />
        </View>
    );
};

BlogForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

// define your styles
const styles = StyleSheet.create({
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
export default BlogForm;
