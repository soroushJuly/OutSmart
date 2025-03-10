import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store/main';
import { StripeProvider } from '@stripe/stripe-react-native';

// Importing navigators
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import GameScreen from './screens/GameScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
// Importing tabs
import HomeTabs from './components/layout/HomeBottomTabs';

// Initialize navigators
const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY}>
          <NavigationContainer>
            <MainStack.Navigator>
              <MainStack.Screen name="Tabs" component={HomeTabs} options={{ headerShown: false }} />
              {/* Pages with no tabs: */}
              <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <MainStack.Screen name="SignUp" component={SignUpScreen} />
              <MainStack.Screen name="Game" component={GameScreen} options={{ headerBackTitle: "Back" }} />
              <MainStack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
            </MainStack.Navigator>
          </NavigationContainer>
        </StripeProvider>
      </Provider>
    </>
  );
}

