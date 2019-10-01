//import liraries
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

// create a component
const SignInScreen = ({ navigation }) => {
    const { state, actions } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Spacer>
                <AuthForm 
                    title="Sign in your Account" 
                    buttonTitle="Sign in" 
                    errorMessage={state.errorMessage} 
                    onSubmit={actions.signUp}
                    loading={state.loading}
                />
                <Spacer />
                <NavLink 
                    title="Not yet registered ? Sign Up"
                    route="SignUp"
                />
            </Spacer>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    }
});

//make this component available to the app
export default SignInScreen;
