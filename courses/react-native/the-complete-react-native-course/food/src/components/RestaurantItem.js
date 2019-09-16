//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

// create a component
const RestaurantItem = ({ name, img, id, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { id: id })}>
                <Image style={styles.image} source={{ url: img }} />
                <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
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
export default withNavigation(RestaurantItem);
