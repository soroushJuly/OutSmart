import { useWindowDimensions } from 'react-native';
import { View, Button, StyleSheet } from 'react-native';
import { useRef } from 'react';

import { WebView } from 'react-native-webview';

import BaseButton from '../components/BaseButton';

function HomeScreen() {

    const { height, width, scale, fontScale } = useWindowDimensions();
    const webViewRef = useRef(null);

    const sendMessageToUnity = (message) => {
        message = { type: "start_game", level: 1 };
        if (webViewRef.current) {
            webViewRef.current.injectJavaScript(`sendMessageToUnity(${JSON.stringify(message.type)})`);
        }
    };

    // sendMessageToUnity({ type: "start_game", level: 1 });
    return (
        <View style={styles.container}>
            <BaseButton>Base Button</BaseButton>
            <Button title='Send Message' onPress={sendMessageToUnity} style={{ height: 100 }} />
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            <View style={{ flexDirection: 'row', width: '100%', height: '80%' }}>
                <WebView
                    ref={webViewRef}
                    source={{ uri: 'https://www.soroushjuly.com/XO/index.html' }}
                    style={{
                        marginTop: 0,
                        flexGrow: 1,

                    }}
                    onMessage={(event) => {
                        console.log("Message from Unity:", event.nativeEvent.data);
                    }}

                />
            </View>
            {/* <WebView
        javaScriptEnabled
        domStorageEnabled
        allowUniversalAccessFromFileURLs
        cacheEnabled={true}
        originWhitelist={['*']}
        allowsInlineMediaPlayback
        renderLoading={() => <ActivityIndicator size="large" color="#00ff00" />}

        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error('WebView error:', nativeEvent);
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error('HTTP error:', nativeEvent);
        }}
        startInLoadingState
      /> */}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});