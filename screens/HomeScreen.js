import { useWindowDimensions } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { useRef } from 'react';

import BaseButton from '../components/BaseButton';
import GameIcon from '../components/GameIcon';


function HomeScreen({ navigation }) {

    const webViewRef = useRef(null);

    function goToGame(src) {
        navigation.navigate('Game', { gameSrc: src });
    }

    const gameList = [
        { title: 'XO', imgSrc: require('../assets/game_icons/tik_tak_toe.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Math', imgSrc: require('../assets/game_icons/tik_tak_toe.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey2', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' }
    ]

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View>
                    <Text>Avatar</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Username</Text>
                    <Text>Points</Text>
                    <Text>Credits</Text>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 12 }}>Games</Text>
            </View>
            <View style={styles.gameContainer}>
                {gameList.map((item) =>
                    <GameIcon
                        imgSource={item.imgSrc}
                        title={item.title}
                        style={{ marginBottom: 10 }}
                        key={item.title}
                        onPress={goToGame.bind(this, item.src)}
                    />)}
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    gameContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});