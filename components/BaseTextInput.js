import { View, Text, Button, TextInput, StyleSheet } from 'react-native'


function BaseTextInput({ value, placeholder, label, onChangeText, isSensitive, style }) {
    return (
        <View style={[style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput value={value} placeholder={placeholder} style={styles.input} onChangeText={onChangeText} secureTextEntry={isSensitive} />
        </View>
    )
}

export default BaseTextInput;

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        fontSize: 16,
        borderRadius: 5
    },
    label: {
        marginBottom: 2,
        fontSize: 20
    }
})