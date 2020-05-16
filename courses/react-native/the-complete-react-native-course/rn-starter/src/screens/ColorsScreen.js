import React, { useState } from 'react';
import {  Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { pipe, append, __ } from 'ramda';
import { appendRandomColor, arrToRgbStr } from '../services/colorManipulation';

const generateRamdomRgb = pipe(
    appendRandomColor,
    appendRandomColor,
    appendRandomColor,
    arrToRgbStr
);

export default function ColorsScreen() {
    const [colors, setColors ] = useState([]);
    const onAddColor = pipe(generateRamdomRgb, append(__, colors), setColors)
    
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Colors Demo</Text>
            <Button 
                title="Add Color"
                onPress={onAddColor}
            />
            <FlatList 
                data={colors}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    return (
                        <View 
                            style={{ width: 150, height: 150, backgroundColor: item }} 
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: { padding: 16 },
    title: { fontSize: 30, marginVertical: 16 }
});