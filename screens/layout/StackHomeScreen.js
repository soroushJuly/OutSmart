import GameDetailsScreen from '../../screens/GameDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

function StackHomeScreen({ navigation }) {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeFeed"
                component={HomeScreen}
                options={{ title: "OutSmart" }} />
            <HomeStack.Screen
                name="GameDetails"
                component={GameDetailsScreen}
                options={{ headerBackTitle: 'Back' }} />
        </HomeStack.Navigator>
    );
}

export default StackHomeScreen;