
import { RootStackParamList } from '@/types/navigation';
import { globalFont } from '@constants/const';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from "react-native";
type NavigationProp = DrawerNavigationProp<RootStackParamList>;

const AppHeader = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.appHeader}>
            <MaterialIcons 
            name="menu" size={30} 
            color="black"
            onPress={() => navigation.openDrawer()} />
            <Text style={[styles.headerText, globalFont.font]}>
                TaoDo App
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    appHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 10,
        paddingTop: 40,
    },
    headerText: {
        margin: 0,
        width: "100%",
        fontSize: 25,
        marginStart: 5
    }
})
export default AppHeader;