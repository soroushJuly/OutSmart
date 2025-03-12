import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store/main';
import { StripeProvider } from '@stripe/stripe-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import GameScreen from './screens/GameScreen';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import HomeTabs from './components/layout/HomeBottomTabs';

const MainStack = createNativeStackNavigator();

function AppNavigator() {

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Tabs" component={HomeTabs} options={{ headerShown: false }} />
      <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="SignUp" component={SignUpScreen} />
      <MainStack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <MainStack.Screen name="Game" component={GameScreen} options={{ headerBackTitle: "Back" }} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </StripeProvider>
      </Provider>
    </>
  );
}

