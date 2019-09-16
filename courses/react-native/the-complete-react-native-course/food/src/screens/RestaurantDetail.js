//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import yelp from '../api/yelp';

// create a component
const RestaurantDetail = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [details, setDetails] = useState(null);
    const fetchDetails = async (id) => {
        const response = await yelp.get(`/${id}`);
        setDetails(response.data);
    };
    useEffect(() => {
        fetchDetails(id);
    }, []);

    if (!details)
        return null;

    return (
        <View style={styles.container}>
            <Text style={styles.name} >Details of {details.name}</Text>
            <FlatList 
                data={details.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        width: 300,
        height: 300,
        marginVertical: 16
    },
});

//make this component available to the app
export default withNavigation(RestaurantDetail);
