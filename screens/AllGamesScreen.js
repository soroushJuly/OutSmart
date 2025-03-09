import { Text, View, StyleSheet } from 'react-native';

function AllGamesScreen() {
    return (
        <View style={styles.container}>
            <Text>All Games</Text>
        </View>
    );
}

export default AllGamesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})