//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

// create a component
const Search = () => {
    const [term, setTerm] = useState('');
    const [fetchRestaurants, restaurants, error] = useRestaurants();

    return (
        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onSearch={() => fetchRestaurants(term)}
            />
            <Text>Search Screen</Text>
            <Text>Found {restaurants.length} restaurants.</Text>
            { error ? <Text>{error}</Text> : null }
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
