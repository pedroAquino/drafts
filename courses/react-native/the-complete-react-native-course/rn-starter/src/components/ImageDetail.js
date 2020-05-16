import React from 'react';
import { View, Image, Text,  StyleSheet } from 'react-native';

const ImageDetail  = ({ title, src, style, score }) => (
    <View style={style}>
        <Image source={src} />
        <Text>{title}</Text>
        <Text>score: {score}</Text>
    </View>
);

export default ImageDetail;