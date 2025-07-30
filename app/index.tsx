import About from "@components/Tab/about";
import Detail from "@components/Tab/detail";
import HomeScreen from "@components/Tab/home";
import { View } from "react-native";


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();


const App = () => {
    const [loaded, error] = useFonts({
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
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
        <View>
            <HomeScreen />
            <Detail />
            <About />
        </View>
    )
}
export default App;