import { RootStackParamList } from "@/types/navigation";
import { OPENSANS_REGULAR } from "@constants/const";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
    buttonContainer: {
        marginVertical: 10,
        // width: '80%',
    },
    reviewText:{
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 15
    }
})
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Detail = () => {
        const navigation = useNavigation<NavigationProp>();
        const route: RouteProp<RootStackParamList,'Detail'> = useRoute();
    return (
        <View>
            <Text style={styles.review}>Detail Screen good</Text>
            <Text>Mã số: {route.params?.id}</Text>
            <Text>Tiêu đề: {route.params?.title}</Text>
            <Text>Đánh giá: {route.params?.star}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Đi tới About"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}
export default Detail;