import { Image, View, Pressable, Text, StyleSheet } from "react-native";

function GameIcon({ title, imgSource, onPress, style, size = 'md' }) {
    function checkImageSize() {
        if (size === 'sm') {
            return styles.imageSm
        } else if (size === 'md') {
            return styles.imageMd
        } else {
            return styles.imageLg
        }
    }

    return (
        <View style={[styles.container, style]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.imageContainer, styles.pressed] : styles.imageContainer}
                onPress={onPress}>
                <Image source={imgSource} src={imgSource} style={[styles.image, checkImageSize()]} />
            </Pressable>
            {title && <Text style={styles.title}>{title}</Text>}
        </View >
    )
}

export default GameIcon;

const styles = StyleSheet.create({
    image: {
        borderRadius: 12,
    },
    imageSm: {
        width: 50,
        height: 50,
    },
    imageMd: {
        width: 100,
        height: 100,
    },
    imageLg: {
        width: 150,
        height: 150,
    },
    imageContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
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
        marginTop: 8,
        fontSize: 10,
    }
})