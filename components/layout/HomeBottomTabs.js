import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"; // Import icon library

// Importing stack navigators
import StackHomeScreen from './StackHomeScreen';

import AccountScreen from '../../screens/AccountScreen';
import AllGamesScreen from '../../screens/AllGamesScreen';

// Tab navigator
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "All games") {
                        iconName = focused ? "game-controller" : "game-controller-outline";
                    } else if (route.name === "Add Credit") {
                        iconName = focused ? "add-circle" : "add-circle-outline";
                    } else if (route.name === "Leaderboards") {
                        iconName = focused ? "trophy" : "trophy-outline";
                    } else if (route.name === "Account") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            })}>
            <Tab.Screen name="Home" component={StackHomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="All games" component={AllGamesScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Add Credit" component={AccountScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Leaderboards" component={AccountScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default HomeTabs;