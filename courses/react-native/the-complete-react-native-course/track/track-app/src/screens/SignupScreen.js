//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SignupScreen</Text>
            <Button 
                title="SignUp" 
                onPress={() => navigation.navigate('SignIn')} 
            />
            <Button 
                title="MainFlow"
                onPress={() => navigation.navigate('mainFlow')}
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
export default SignupScreen;
