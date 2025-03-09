import { View, Text, Pressable, StyleSheet } from 'react-native'

function BaseButton({ children, title, onPress, style }) {
    return (
        <View style={[styles.buttonOuterContainer, style]}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : [styles.buttonInnerContainer]}
                onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
                <View>{children}</View>
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
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 8,

    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})