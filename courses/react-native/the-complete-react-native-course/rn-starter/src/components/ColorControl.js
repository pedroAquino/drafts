import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ColorControl({ color, increase, decrease }) {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`Increase ${color}`}
                onPress={increase}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={decrease}
            />
        </View>
    );
}