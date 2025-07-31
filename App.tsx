import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomeScreen from "@components/Tab/home";

import { OPENSANS_REGULAR } from "@constants/const";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import About from './components/Tab/about';
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
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>

    );
};

export default App;
