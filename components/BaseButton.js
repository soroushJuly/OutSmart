import { View, Text, Pressable, StyleSheet } from 'react-native'

function BaseButton({ children }, props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={props?.onPress}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default BaseButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: 'hidden',
        borderRadius: 16
    },
    buttonInnerContainer: {
        backgroundColor: '#00ff00',
        paddingHorizontal: 16,
        paddingVertical: 8,

    },
    text: {
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})