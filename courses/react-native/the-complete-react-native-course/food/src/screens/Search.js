//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

// create a component
const Search = () => {
    const [term, setTerm] = useState('');
    return (
        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onSearch={() => console.log('SEARCH')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default Search;
