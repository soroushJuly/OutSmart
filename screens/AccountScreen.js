import { View, Text, Image, StyleSheet } from 'react-native'
import BaseButton from '../components/BaseButton';
import useProtectedRoute from '../utils/guard-hook';
import { useSelector } from 'react-redux';

function AccountScreen() {
    const screenParams = { isProtected: true };
    // Protect the route
    useProtectedRoute(screenParams);

    const user = useSelector(state => state.auth.user);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
                <View>
                    <Image style={{ width: "100", height: '100', borderRadius: 10 }} source={require("../assets/icon.png")} width="100" height="100" />
                </View>
                <View style={{ justifyContent: 'space-around', marginLeft: 8 }}>
                    <Text style={styles.profileText}>Username: {user?.username}</Text>
                    <Text style={styles.profileText}>Credit: {user?.credit}</Text>
                    <Text style={styles.profileText}>Wins: {user?.wins}</Text>
                </View>
            </View>
            {/* <BaseButton title="Manage Cards" style={styles.button} /> */}
            <BaseButton title="Cashout" style={styles.button} />
            <BaseButton title="Change Email" style={styles.button} />
            <BaseButton title="Change Password" style={styles.button} />
            <BaseButton title="FAQs" style={styles.button} />
            <BaseButton title="Logout" style={styles.button} />
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
})