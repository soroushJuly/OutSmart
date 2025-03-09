import { View, StyleSheet, Text, FlatList } from 'react-native';

import GameIcon from '../components/GameIcon';
import BaseCarousel from '../components/BaseCarousel';

const carouselData = [...new Array(4).keys()];

function HomeScreen({ navigation }) {
    function goToGame(src) {
        navigation.navigate('Game', { gameSrc: src });
    }

    const gameList = [
        { title: 'XO', imgSrc: require('../assets/game_icons/tik_tak_toe.png'), src: 'https://9804-80-5-131-212.ngrok-free.app/xo/' },
        { title: 'Math', imgSrc: require('../assets/game_icons/tik_tak_toe.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey2', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey3', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey42', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey44', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey552', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey44ew', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' },
        { title: 'Air hockey55ew2', imgSrc: require('../assets/game_icons/air_hockey.png'), src: 'https://www.soroushjuly.com/XO/index.html' }
    ]

    return (
        <View style={styles.container}>
            {/* Promotions section */}
            <View style={{ marginBottom: 20 }}>
                <View>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Offers and Promotions 🚀</Text>
                </View>
                <BaseCarousel data={carouselData} renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
                    </View>
                )} />
            </View>
            {/* Recent Games section */}
            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Recent Games</Text>
            </View>
            <View>
                <FlatList
                    data={gameList}
                    horizontal={true}
                    style={{ marginBottom: 8 }}
                    renderItem={({ item }) => <View style={styles.recentGameItem}>
                        <GameIcon
                            imgSource={item.imgSrc}
                            size='sm'
                            title={item.title}
                            key={item.title}
                            onPress={goToGame.bind(this, item.src)}
                        />
                    </View>}
                    keyExtractor={item => item.title}
                />
            </View>
            {/* Games section */}
            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Games</Text>
            </View>
            <View style={styles.gameContainer}>
                <FlatList
                    data={gameList}
                    numColumns={2}
                    // Ensures spacing between columns and rows
                    columnWrapperStyle={{ gap: 10, }}
                    renderItem={({ item }) => <View style={styles.gameItem}>
                        <GameIcon
                            imgSource={item.imgSrc}
                            size='sm'
                            // title={item.title}
                            key={item.title}
                            onPress={goToGame.bind(this, item.src)}
                        />
                        <Text style={{
                            textAlign: 'center', flex: 1,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            textAlignVertical: 'center', height: '100%'
                        }}>{item.title}</Text>
                    </View>}
                    keyExtractor={item => item.title}
                />
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16
    },
    gameContainer: {
        flex: 1,
    },
    gameItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        marginBottom: 10,
        borderRadius: 12,
        padding: 8,
        alignSelf: 'center',
        // marginHorizontal: 8,
    },
    recentGameItem: {
        marginRight: 10,
    }
});