import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../Tab/about';
import Detail from '../Tab/detail';
import HomeScreen from '../Tab/home';
const HomeLayout = () => {
    const Stack = createNativeStackNavigator();
    return (
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
    )
}

const AppNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeLayout} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}
export default AppNavigation;