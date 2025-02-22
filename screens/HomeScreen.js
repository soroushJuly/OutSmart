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
            {gameList.map((item) =>
                <GameIcon
                    imgSource={item.imgSrc}
                    title={item.title}
                    style={{ marginBottom: 10 }}
                    key={item.title}
                    onPress={goToGame.bind(this, item.src)}
                />)}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});