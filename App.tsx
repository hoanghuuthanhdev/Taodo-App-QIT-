import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OPENSANS_REGULAR } from "@constants/const";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// Update the import path to a relative path if the file exists locally
import AppNavigation from "@components/navigation/app.navigation";

SplashScreen.preventAutoHideAsync();


const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
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
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
