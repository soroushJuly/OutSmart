
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FaqScreen from '../FaqScreen';
import AccountScreen from '../AccountScreen';

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
        </AccountStack.Navigator>
    );
}

export default StackAccountScreens;