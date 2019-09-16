import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './src/screens/Search';
import RestaurantDetail from './src/screens/RestaurantDetail';

const navigator = createStackNavigator({
  Search: Search,
  RestaurantDetail: RestaurantDetail
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);