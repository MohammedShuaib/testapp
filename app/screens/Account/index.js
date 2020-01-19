import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';


const accountNavigator = createStackNavigator({ 
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    }
});

export default accountNavigator;