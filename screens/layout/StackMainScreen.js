import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import GameScreen from '../../screens/GameScreen';
import VerifyEmailScreen from '../../screens/VerifyEmailScreen';
import HomeTabs from './HomeBottomTabs';

const MainStack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Tabs" component={HomeTabs} options={{ headerShown: false }} />
            <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="SignUp" component={SignUpScreen} />
            <MainStack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
            <MainStack.Screen name="Game" component={GameScreen} options={{ headerShown: false }} />
        </MainStack.Navigator>
    );
}

export default MainNavigator;