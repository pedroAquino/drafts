import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Firiend #1', age: 20 },
        { name: 'Firiend #2', age: 32 },
        { name: 'Firiend #3', age: 50 },
        { name: 'Firiend #4', age: 65 },
        { name: 'Firiend #5', age: 24 },
        { name: 'Firiend #6', age: 43 },
        { name: 'Firiend #7', age: 16 },
        { name: 'Firiend #8', age: 22 },
        { name: 'Firiend #9', age: 69 },
    ];

    return (
        <FlatList 
            data={friends}
            keyExtractor={({ name }) => name}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
            style={styles.flatListStyle}
        />
    );
};

const styles = StyleSheet.create({
    flatListStyle: {
        padding: 16
    },
    textStyle: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 8,
        marginVertical: 20
    }
});

export default ListScreen;