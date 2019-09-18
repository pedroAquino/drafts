//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

// create a component
const IndexScreen = () => {
    const { state, actions } = useContext(BlogContext);
    return (
        <View style={styles.container}>
            <Text>IndexScreen</Text>
            <Button title="Add Blog Post" onPress={actions.addBlogPost} />
            <FlatList 
                data={state}
                keyExtractor={post => post.title}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default IndexScreen;
