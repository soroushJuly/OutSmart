import { Image, View, Pressable, Text, StyleSheet } from "react-native";

function GameIcon({ title, imgSource, onPress, style }) {

    return (
        <View style={[styles.container, style]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.imageContainer, styles.pressed] : styles.imageContainer}
                onPress={onPress}>
                <Image source={imgSource} style={styles.image} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View >
    )
}

export default GameIcon;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        marginBottom: 6,
    },
    imageContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    pressed: {
        opacity: 0.75
    },
    container: {
        alignContent: 'center',
        alignItems: 'center'
        // borderRadius: 12
    },
    title: {
        fontWeight: 'bold'
    }
})