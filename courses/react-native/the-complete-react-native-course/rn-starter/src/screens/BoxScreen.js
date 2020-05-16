//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.parentContainer}>
                <View style={styles.childOne} />
                <View style={styles.childTwo} />
                <View style={styles.childThree} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: 'row'
    },
    childOne: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        flex: 1
    },
    childTwo: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        flex: 1,
        marginTop: 150
    },
    childThree: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        flex: 1
    }
});

//make this component available to the app
export default BoxScreen;
