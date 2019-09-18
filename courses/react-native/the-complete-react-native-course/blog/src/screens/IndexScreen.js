//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

// create a component
const IndexScreen = ({ navigation }) => {
    const { state, actions } = useContext(BlogContext);
    return (
        <React.Fragment>    
            <View style={styles.header}>
                <Text style={styles.title} >Awesome Blogging App</Text>
            </View>
            <FlatList 
                data={state}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', { id: item.id })} >
                        <View style={styles.row}>
                            <Text>{item.title}</Text>
                            <TouchableOpacity onPress={() => actions.deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </React.Fragment>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => ({
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('AddScreen')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
    )
});

// define your styles
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginTop: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#000',
        marginVertical: 16,
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    title: {
        fontSize: 24
    },
    icon: {
        fontSize: 24
    }
});

//make this component available to the app
export default IndexScreen;
