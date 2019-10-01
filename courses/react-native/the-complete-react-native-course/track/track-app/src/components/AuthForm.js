//import liraries
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Button, Text, Input } from 'react-native-elements';


// create a component
const AuthForm = ({ title, buttonTitle, errorMessage, onSubmit }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <>
            <Text h3>{title}</Text>
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
                title={buttonTitle}
                onPress={() => onSubmit({ email, password })}
            />
            { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        marginTop: 8
    }
});

//make this component available to the app
export default AuthForm;
