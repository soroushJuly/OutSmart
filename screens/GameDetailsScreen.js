import { Text, View, Image, StyleSheet } from "react-native";
import BaseButton from "../components/BaseButton";

function GameDetailsScreen({ navigation, route }) {
    const { game } = route.params;

    console.log(route.params)

    function handlePlayPress(src) {
        navigation.navigate('Game', { game: src });
    }

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