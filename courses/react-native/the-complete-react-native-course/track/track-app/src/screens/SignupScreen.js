//import liraries
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext, getSignUpState } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

// create a component
const SignupScreen = () => {
    const { state, actions } = useContext(AuthContext);
    const signUpState = getSignUpState(state);
    return (
        <View style={styles.container}>
            <Spacer>
                <AuthForm 
                    title="Sign up for tracker" 
                    buttonTitle="Sign up" 
                    errorMessage={signUpState.errorMessage} 
                    onSubmit={actions.signUp}
                    loading={signUpState.loading}
                />
                <Spacer />
                <NavLink 
                    title="Already have an account ? Sign In"
                    route="SignIn"
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
export default SignupScreen;
