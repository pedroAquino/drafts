import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider as BlogProvider } from './src/context/BlogContext'; 

const stackNavigator = createStackNavigator({
  IndexScreen,
  ShowScreen
}, {
  initialRouteName: 'IndexScreen'
});

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};