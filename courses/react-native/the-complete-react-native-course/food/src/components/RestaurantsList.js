//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';

// create a component
const RestaurantsList = ({ title, restaurants }) => {
    if (restaurants.length === 0)
        return null;
    
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <FlatList 
                horizontal
                data={restaurants}
                keyExtractor={r => r.id}
                renderItem={({ item }) => <RestaurantItem id={item.id} name={item.name} img={item.image_url} />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default RestaurantsList;
