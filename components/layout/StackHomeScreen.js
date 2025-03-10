import GameDetailsScreen from '../../screens/GameDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BaseButton from '../BaseButton';

const HomeStack = createNativeStackNavigator();

function StackHomeScreen({ navigation }) {
    const loginProfile = <BaseButton title="Login" onPress={() => navigation.navigate('Login')} />;

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeFeed" component={HomeScreen} options={{ title: "OutSmart", headerRight: () => loginProfile }} />
            <HomeStack.Screen name="GameDetails" component={GameDetailsScreen} options={{
                headerBackTitle: 'Back',
                headerRight: () => loginProfile,
            }} />
        </HomeStack.Navigator>
    );
}

export default StackHomeScreen;