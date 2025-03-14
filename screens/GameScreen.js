import { View, StyleSheet, ActivityIndicator, useWindowDimensions, Button } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import useProtectedRoute from '../utils/guard-hook';

import { WebView } from 'react-native-webview';

function GameScreen({ navigation, route }) {
    const screenParams = { isProtected: true };
    // Protect the route
    useProtectedRoute(screenParams);

    const [loading, setLoading] = useState(true);


    const { width, height } = useWindowDimensions();

    // Game file path
    const gameSrc = route.params.src;
    const [token, setToken] = useState('')

    const webViewRef = useRef(null);

    function sendTokenToGame(token) {
        if (webViewRef.current) {
            const safeMessage = JSON.stringify({ type: "auth", token });
            webViewRef.current.injectJavaScript(`window.receiveMessageFromReact(${safeMessage});`);
        }
    }

    useEffect(() => {
        const getToken = async () => {
            try {
                const storedToken = await SecureStore.getItemAsync('secure_token');
                if (storedToken) {
                    setToken(storedToken);
                }
            } catch (errorr) {
                console.error('Error fetching token:', error);
                navigation.navigate('Login');
            } finally {
                // setLoading(false);
            }
        }

        getToken();
    }, [webViewRef]);

    return (
        <View style={styles.container}>
            {loading && (
                <View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 5,
                    justifyContent: "center",
                    alignItems: "center", width: width, height: height, justifyContent: 'center', backgroundColor: 'purple'
                }}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            )}
            {token &&
                <WebView
                    ref={webViewRef}
                    source={{ uri: gameSrc }}
                    javaScriptEnabled={true}  // Enable JavaScript in WebView
                    domStorageEnabled={true}
                    originWhitelist={['*']}  // Allow all origins (or set specific ones) // Prevents loading untrusted content TODO: Change this to the game's domain
                    onMessage={(event) => {
                        try {
                            const message = JSON.parse(event.nativeEvent.data); // Parse the incoming message from Phaser
                            console.log("Message from Phaser:", message);

                            if (message.event === "gameFinished") {
                                console.log("Game finished with score:", message.score);
                            }
                        } catch (error) {
                            console.error("Error parsing message:", error);
                        }
                    }}
                    onLoadEnd={() => {
                        // send token to game after 1 second
                        setTimeout(() => {
                            sendTokenToGame(token);
                            setLoading(false);
                        }, 1000);
                    }}
                    onError={(syntheticEvent) => {
                        const { nativeEvent } = syntheticEvent;
                        console.error('WebView error:', nativeEvent);
                    }}
                    containerStyle={{ flex: 1, width: width, opacity: 1 }}
                    incognito={false} // Make sure cookies persist in the WebView
                    useWebKit={true}
                />
            }
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});