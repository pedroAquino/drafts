import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';

const stackNavigator = createStackNavigator({
  IndexScreen
}, {
  initialRouteName: 'IndexScreen'
});

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <App />
  );
};