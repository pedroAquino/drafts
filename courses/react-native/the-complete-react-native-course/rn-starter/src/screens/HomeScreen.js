import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Home
      </Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to lists Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to images Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to counter Demo" 
      />
        <Button 
          onPress={() => navigation.navigate('Colors')}
          title="Go to colors screen Demo"
      />
      <Button 
          onPress={() => navigation.navigate('ColorsControl')}
          title="Go to colors control screen Demo"
      />
      <Button 
          onPress={() => navigation.navigate('Box')}
          title="Go to Box screen Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
