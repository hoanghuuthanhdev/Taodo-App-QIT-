import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import About from "@components/Tab/about";
import Detail from "@components/Tab/detail";
import HomeScreen from "@components/Tab/home";

import { OPENSANS_REGULAR } from "@constants/const";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#orange',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{ title: 'TaoDo App' }}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={Detail}
                    options={{ title: 'Chi tiết' }}
                />
                <Stack.Screen 
                    name="About" 
                    component={About}
                    options={{ title: 'Giới thiệu' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
