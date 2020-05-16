import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ColorControl from '../components/ColorControl'
import { arrToRgbStr } from '../services/colorManipulation';
import { pipe, add } from 'ramda';

const inc = add(10);
const dec = add(-10);

export default function ColorsControlScreen() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const rgb = arrToRgbStr([red, green, blue]);


    return (
        <View style={styles.root}>
            <Text style={styles.text} >COLORS</Text>
            <ColorControl
                color="red"
                increase={() => pipe(inc, setRed)(red)}
                decrease={() => pipe(dec, setRed)(red)}
            />
            <ColorControl
                color="green"
                increase={() => pipe(inc, setGreen)(green)}
                decrease={() => pipe(dec, setGreen)(green)}
            />
            <ColorControl
                color="blue"
                increase={() => pipe(inc, setBlue)(blue)}
                decrease={() => pipe(dec, setBlue)(blue)}
            />
            <View style={{ width: '100%', height: 150, backgroundColor: rgb }} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: { padding: 16 },
    text: { fontSize: 30 }
});