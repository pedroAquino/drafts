import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import AddScreen from './src/screens/AddScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider as BlogProvider } from './src/context/BlogContext'; 

const stackNavigator = createStackNavigator({
  IndexScreen,
  ShowScreen,
  AddScreen,
  EditScreen
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