
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FaqScreen from '../StackAccount/FaqScreen';
import ChangePasswordScreen from '../StackAccount/ChangePasswordScreen';
import ChangeEmailScreen from '../StackAccount/ChangeEmailScreen';
import AccountScreen from '../StackAccount/AccountScreen';

const AccountStack = createNativeStackNavigator();

function StackAccountScreens({ navigation }) {

    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name="AccountMain"
                component={AccountScreen}
                options={{ title: "Account" }} />
            <AccountStack.Screen
                name="FAQs"
                component={FaqScreen}
            />
            <AccountStack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
            />
            <AccountStack.Screen
                name="ChangeEmail"
                component={ChangeEmailScreen}
            />
        </AccountStack.Navigator>
    );
}

export default StackAccountScreens;