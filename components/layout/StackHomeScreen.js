import GameDetailsScreen from '../../screens/GameDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

function StackHomeScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeFeed" component={HomeScreen} />
            <HomeStack.Screen name="GameDetails" component={GameDetailsScreen} />
            {/* other screens */}
        </HomeStack.Navigator>
    );
}

export default StackHomeScreen;