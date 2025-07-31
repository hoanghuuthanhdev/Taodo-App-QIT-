import About from "@components/Tab/about";
import Detail from "@components/Tab/detail";
import HomeScreen from "@components/Tab/home";
import { View } from "react-native";

import { OPENSANS_REGULAR } from "@constants/const";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <View style={{ flex: 1, paddingTop: 50 }}>
            <HomeScreen />
            <Detail />
            <About />
        </View>
    );
}

export default App;