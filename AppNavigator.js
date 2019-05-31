import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Map from './pages/Map';
import Stream from './pages/Stream';

const AppNavigator = createStackNavigator({
        Home: { screen: Home },
        Chat: { screen: Chat },
        Map: { screen: Map },
        Stream: { screen: Stream },
    },
    {
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
    }
   }
);


const AppNav = createAppContainer(AppNavigator);

export default AppNav;