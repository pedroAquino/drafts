//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text>AccountScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default AccountScreen;
