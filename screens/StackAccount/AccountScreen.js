import { View, Text, Image, StyleSheet } from 'react-native'
import BaseButton from '../../components/BaseButton';
import useProtectedRoute from '../../utils/guard-hook';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

function AccountScreen({ navigation }) {
    const screenParams = { isProtected: true };
    // Protect the route
    useProtectedRoute(screenParams);

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    const handleFaqPress = () => {
        navigation.navigate('Tabs', { screen: 'StackAccount', params: { screen: 'FAQs' } });
    }

    function handleLogout() {
        dispatch(logout());
    }

    function handleChangePassPress() {
        navigation.navigate('Tabs', { screen: 'StackAccount', params: { screen: 'ChangePassword' } });
    }

    function handleChangeEmailPress() {
        navigation.navigate('Tabs', { screen: 'StackAccount', params: { screen: 'ChangeEmail' } });
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
                <View>
                    <Image style={{ width: "100", height: '100', borderRadius: 10 }} source={require("../../assets/icon.png")} width="100" height="100" />
                </View>
                <View style={{ justifyContent: 'space-around', marginLeft: 8 }}>
                    <Text style={styles.profileText}>Username: {user?.username}</Text>
                    <Text style={styles.profileText}>Credit: {user?.credit}</Text>
                    <Text style={styles.profileText}>Wins: {user?.wins}</Text>
                </View>
            </View>
            {/* <BaseButton title="Manage Cards" style={styles.button} /> */}
            <BaseButton title="Cashout" style={styles.button} />
            <BaseButton title="Change Email" style={styles.button} onPress={handleChangeEmailPress} />
            <BaseButton title="Change Password" style={styles.button} onPress={handleChangePassPress} />
            <BaseButton title="FAQs" style={styles.button} onPress={handleFaqPress} />
            <BaseButton title="Logout" style={styles.button} onPress={handleLogout} />
            {/* <Text></Text> */}
        </View>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
    button: {
        textAlign: 'left',
        marginBottom: 12
    },
    profileText: { fontSize: 20 }
});