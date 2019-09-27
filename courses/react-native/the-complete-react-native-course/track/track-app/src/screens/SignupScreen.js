//import liraries
import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

// create a component
const SignupScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { state, actions } = useContext(AuthContext);
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
                    onPress={() => actions.signUp({ email, password })}
                />
                { state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                <Text>{state.token}</Text>
            </Spacer>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
    errorMessage: {
        color: 'red',
        marginTop: 8
    }
});

//make this component available to the app
export default SignupScreen;
