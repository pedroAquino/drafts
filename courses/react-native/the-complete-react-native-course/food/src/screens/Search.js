//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

// create a component
const Search = () => {
    const [term, setTerm] = useState('');
    const [fetchRestaurants, restaurants, error] = useRestaurants();
    const restaurantsByPrice = (price) => restaurants.filter(r => r.price === price);

    return (
        <React.Fragment>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onSearch={() => fetchRestaurants(term)}
            />
            { error ? <Text>{error}</Text> : null }
            <ScrollView>
                <RestaurantsList restaurants={restaurantsByPrice('$')} title="Cost Effective" />
                <RestaurantsList restaurants={restaurantsByPrice('$$')} title="Bit Pricier" />
                <RestaurantsList restaurants={restaurantsByPrice('$$$')} title="Expensive" />
                <RestaurantsList restaurants={restaurantsByPrice('$$$$')} title="Big Spender"  />
            </ScrollView>
        </React.Fragment>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default Search;
