import { Text, View, Image, StyleSheet, Alert } from "react-native";
import BaseButton from "../components/BaseButton";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../store/authSlice";
import { checkCredits } from "../utils/api/api-auth";

function GameDetailsScreen({ navigation, route }) {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const { game } = route.params;

    console.log(route.params)

    async function handlePlayPress(src) {
        if (!isAuthenticated)
            navigation.navigate('Login');
        else {
            const { data, success } = await checkCredits({ gameId: game?.id });

            if (success)
                navigation.navigate('Game', { src: process.env.EXPO_PUBLIC_BASE_URL + src });
            else
                Alert.alert('Error', 'You do not have enough credits to play this game');
        }
    }

    const user = useSelector(selectUser);

    useEffect(() => {
        if (isAuthenticated) {
            navigation.setOptions({
                headerRight: () => <Text ellipsizeMode='tail' numberOfLines={1} style={{ maxWidth: '120' }}>{user?.username}</Text>,
            });
        } else {
            navigation.setOptions({
                headerRight: () => <BaseButton title="Login" onPress={() => navigation.navigate('Login')} />,
            });
        }

    }, [isAuthenticated, user, navigation]);

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between', marginBottom: 8
            }}>
                <Text style={styles.title}>{game?.title}</Text>
                <BaseButton title="Play now" onPress={() => handlePlayPress(game?.src)} />
            </View>
            <Image source={game?.imgSrc} style={{ width: '100%', flex: 1, maxHeight: '150', borderRadius: 6 }} />
            <Text style={{ marginTop: 12, fontSize: 18 }}>Description</Text>
            <Text style={{ marginTop: 6 }}>game?.description"game?.descriptiongame?.descriptiongame?.descriptiongame?.descriptiongame?.description</Text>
        </View>
    );
}

export default GameDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});