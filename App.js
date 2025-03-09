import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store/main';

// Importing navigators
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Importing Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import GameScreen from './screens/GameScreen';
// Importing tabs
import HomeTabs from './components/layout/HomeBottomTabs';

// Initialize navigators
const MainStack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen name="Tabs" component={HomeTabs} options={{ title: "OutSmart" }} />
            {/* Pages with no tabs: */}
            <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="SignUp" component={SignUpScreen} />
            <MainStack.Screen name="Game" component={GameScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

