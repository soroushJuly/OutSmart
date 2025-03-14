import { View, StyleSheet, Text, FlatList, Pressable, ImageBackground } from 'react-native';

import GameIcon from '../components/GameIcon';
import BaseCarousel from '../components/BaseCarousel';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../store/authSlice';
import { useEffect, useState } from 'react';
import BaseButton from '../components/BaseButton';
import { getAllNews } from '../utils/api/api-news';


function HomeScreen({ navigation }) {
    const [carouselData, setCarouselData] = useState([]);
    function handleGameItemPress(src) {
        navigation.navigate('GameDetails', { game: src });
    }

    console.log('User:', user);

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);

    useEffect(() => {
        console.log('Checking auth effect');
        if (isAuthenticated) {
            navigation.setOptions({
                headerRight: () => <Text ellipsizeMode='tail' numberOfLines={1} style={{ maxWidth: '120' }}>{user?.username}</Text>,
            });
        } else {
            navigation.setOptions({
                headerRight: () => <BaseButton title="Login" onPress={() => navigation.navigate('Login')} />,
            });
        }

        const fetchNews = async () => {
            const { data, success } = await getAllNews();
            if (success) {
                setCarouselData(data);
            }
        }

        fetchNews();
    }, [isAuthenticated, user, navigation]);


    const gameList = [
        { title: 'Ball Balance', imgSrc: require('../assets/game_icons/tik_tak_toe.png'), src: process.env.EXPO_PUBLIC_BASE_URL + '/games/ball-balance/' },
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
                    <Text style={styles.sectionTitle}>News and Promotions 🚀</Text>
                </View>
                <BaseCarousel style={{ borderRadius: 4 }} data={carouselData} renderItem={({ index }) => (
                    <ImageBackground source={{ uri: process.env.EXPO_PUBLIC_BASE_URL + carouselData[index].thumbnail }} style={{ flex: 1 }}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                            }}
                        >
                            {/* <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text> */}
                        </View>
                    </ImageBackground>
                )} />
            </View>
            {/* Recent Games section */}
            <View>
                <Text style={styles.sectionTitle}>Recent Games</Text>
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
                            onPress={handleGameItemPress.bind(this, item)}
                        />
                    </View>}
                    keyExtractor={item => item.title}
                />
            </View>
            {/* Games section */}
            <View>
                <Text style={styles.sectionTitle}>Games</Text>
            </View>
            <View style={styles.gameContainer}>
                <FlatList
                    data={gameList}
                    numColumns={2}
                    // Ensures spacing between columns and rows
                    columnWrapperStyle={{ gap: 10, }}
                    renderItem={({ item }) =>
                        <Pressable
                            style={({ pressed }) => pressed ? [styles.gameItem, styles.pressed] : styles.gameItem}
                            onPress={handleGameItemPress.bind(this, item)}>
                            {/* There is another pressable inside this game icon */}
                            <GameIcon
                                imgSource={item.imgSrc}
                                size='sm'
                                onPress={handleGameItemPress.bind(this, item)}
                                key={item.title}
                            />
                            <Text style={{
                                textAlign: 'center', flex: 1,
                                fontWeight: 'bold',
                                alignSelf: 'center',
                                textAlignVertical: 'center', height: '100%'
                            }}>{item.title}</Text>
                        </Pressable>
                    }
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
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
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
    },
    recentGameItem: {
        marginRight: 10,
    }
});