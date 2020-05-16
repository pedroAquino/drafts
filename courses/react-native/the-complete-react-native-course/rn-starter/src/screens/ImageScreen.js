import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => (
    <View style={styles.imgScreen}>
        <Text style={styles.screenTitle} >Image Sceen</Text>
        <ImageDetail 
            style={styles.imgDetail} 
            src={require("../../assets/beach.jpg")}  
            title="Beach" score={10} 
        />
        <ImageDetail 
            style={styles.imgDetail} 
            src={require("../../assets/forest.jpg")}  
            title="Forest" score={7.8} />
        <ImageDetail 
            style={styles.imgDetail} 
            src={require("../../assets/mountain.jpg")}  
            title="Mountain" 
            score={4} 
        />
    </View>
);


const styles = StyleSheet.create({
    imgScreen: { padding: 16 },
    imgDetail: { marginVertical: 16 },
    screenTitle: { fontSize: 30 }
});

export default ImageScreen;
