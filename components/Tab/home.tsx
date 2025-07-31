import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from "react-native";
import type { RootStackParamList } from '../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TaoDo App - Home Screen</Text>
            
            <View style={styles.buttonContainer}>
                <Button 
                    title="Đi tới Detail" 
                    onPress={() => navigation.navigate('Detail')}
                />
            </View>
            
            <View style={styles.buttonContainer}>
                <Button 
                    title="Đi tới About" 
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    }
});

export default HomeScreen;