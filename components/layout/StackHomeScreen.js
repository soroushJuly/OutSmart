import GameDetailsScreen from '../../screens/GameDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BaseButton from '../BaseButton';

const HomeStack = createNativeStackNavigator();

function StackHomeScreen() {
    const loginProfile = <BaseButton title="Login" />;

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeFeed" component={HomeScreen} options={{ title: "OutSmart", headerRight: () => loginProfile }} />
            <HomeStack.Screen name="GameDetails" component={GameDetailsScreen} options={{
                headerBackTitle: 'Back',
                headerRight: () => (
                    <BaseButton title="Login" />
                ),
            }} />
        </HomeStack.Navigator>
    );
}

export default StackHomeScreen;