import {createStackNavigator} from 'react-navigation';
import LoginScreen from "./screen/Login";
import MainScreen from "./screen/Main";

export default RootStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        },
        Main: {
            screen: MainScreen
        },
    },
    {
        initialRouteName: 'Login',
    }
);