import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../Tab/about';
import Detail from '../Tab/detail';
import HomeScreen from '../Tab/home';
import AppHeader from './app.header';
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
                options={{ header: () => <AppHeader /> }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ title: 'Chi tiết' }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{ title: 'Giới thiệu', header: () => <AppHeader /> }}
            />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeLayout} options={{title:'Trang chủ', header:()=><></>}} />
            <Drawer.Screen name="About" component={About} options={{title: 'Thông tin', header:()=><AppHeader/>}}/>
        </Drawer.Navigator>
    )
}
export default AppNavigation;