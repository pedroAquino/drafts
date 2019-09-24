//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const TrackListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>TrackListScreen</Text>
            <Button 
                title="TrackDetail"
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default TrackListScreen;
