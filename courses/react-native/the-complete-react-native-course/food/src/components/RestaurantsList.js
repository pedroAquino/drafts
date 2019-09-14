//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// create a component
const RestaurantsList = ({ title, restaurants }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <FlatList 
                horizontal
                data={restaurants}
                keyExtractor={r => r.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default RestaurantsList;
