import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from  'react-native';

export default function CounterScreen() {
    const [counter, setCounter] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter Demo</Text>
            <Button 
                title="Increase Counter"
                onPress={() => setCounter(counter + 1)}
            />
            <Button 
                title="Decrease Counter"
                onPress={() => setCounter(counter - 1)}
            />
            <Text style={styles.title}>{counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 30, textAlign: 'center' },
    container: { textAlign: 'center' }
});