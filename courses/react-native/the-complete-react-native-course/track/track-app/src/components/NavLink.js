//import liraries
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

// create a component
const NavLink = ({ navigation, title, route }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <Text style={styles.link}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

//make this component available to the app
export default withNavigation(NavLink);
