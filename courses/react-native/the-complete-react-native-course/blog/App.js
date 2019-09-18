import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext'; 

const stackNavigator = createStackNavigator({
  IndexScreen
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