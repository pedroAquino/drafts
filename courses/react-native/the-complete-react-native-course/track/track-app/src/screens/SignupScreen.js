//import liraries
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

// create a component
const SignupScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for Tracker</Text>
                <Spacer />
                <Input 
                    label="email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Spacer />
                <Input
                    secureTextEntry
                    label="password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                />
                <Spacer />
                <Button 
                    title="Sign Up"
                />
            </Spacer>
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
