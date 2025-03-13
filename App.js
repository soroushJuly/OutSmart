import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store/main';
import { StripeProvider } from '@stripe/stripe-react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './screens/layout/StackMainScreen';


export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </StripeProvider>
      </Provider>
    </>
  );
}

