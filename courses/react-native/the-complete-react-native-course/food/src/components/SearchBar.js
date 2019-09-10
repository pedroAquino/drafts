//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput,  StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// create a component
const SearchBar = ({ term, onTermChange, onSearch }) => {
    return (
        <View style={styles.container}>
            <Feather style={styles.icon} name="search" size={30} />
            <TextInput 
                placeholder="Search" 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false} 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onSearch}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row'
    },
    input: {
      flex: 1,
      fontSize: 15,
      marginHorizontal: 15
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
        marginLeft: 15
    }
});

//make this component available to the app
export default SearchBar;
