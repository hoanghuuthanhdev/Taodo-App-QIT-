import { RootStackParamList } from "@/types/navigation";
import { OPENSANS_REGULAR } from "@constants/const";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    reviewText:{
        fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
        padding: 10,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 5,
        marginVertical: 5
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
        padding: 20,
        justifyContent: 'center'
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10
    }
})
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Detail = () => {
        const navigation = useNavigation<NavigationProp>();
        const route: RouteProp<RootStackParamList,'Detail'> = useRoute();
    return (
        <ImageBackground 
            source={require("@assets/images/native.webp")} 
            style={{flex: 1}}
            resizeMode="contain"
        >
            <View style={styles.overlay}>
                <Text style={styles.review}>Detail Screen good</Text>
                <Text style={styles.reviewText}>Mã số: {route.params?.id}</Text>
                <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
                <View style={styles.starContainer}>
                    <Text style={styles.reviewText}>Đánh giá: {route.params?.star} </Text>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require("@assets/images/star.webp")}
                    />
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require("@assets/images/star.webp")}
                    />
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require("@assets/images/star.webp")}
                    />
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require("@assets/images/star.webp")}
                    />
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require("@assets/images/star.webp")}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Đi tới About"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}
export default Detail;