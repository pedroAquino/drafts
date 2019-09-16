//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// create a component
const RestaurantItem = ({ name, img }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ url: img }} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginRight: 15
    },
    image: {
        width: 250,
        height: 120
    },
    name: {
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default RestaurantItem;
