import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { RootStackParamList } from '../../types/navigation';
import CreateModel from './create.model';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface IReview {
    id: number,
    title: string,
    star: number;
}

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: "React Native", star: 5 },
        { id: 2, title: "React Native", star: 5 },
        { id: 3, title: "React Native", star: 5 },
        { id: 4, title: "React Native", star: 5 },
        { id: 5, title: "React Native", star: 5 },
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                    <AntDesign
                        onPress={() => {
                            setModalVisible(true);
                        }}
                        name="pluscircle" size={35} color="black" />
                </View>
                <FlatList
                    style={{ marginTop: 10 }}
                    data={reviews}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                                <View>
                                    <Text style={styles.reviewItem}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            {/* <View style={styles.buttonContainer}>
                <Button
                    title="Đi tới Detail"
                    onPress={() => navigation.navigate('Detail')}
                />
            </View> */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Đi tới About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
            <CreateModel
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        // width: '80%',
    },
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        marginBottom: 15,
    }
});

export default HomeScreen;