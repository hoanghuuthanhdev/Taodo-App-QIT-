import { OPENSANS_REGULAR } from "@constants/const";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    }
})
const Detail = ()=>{
    return (
        <View>
            <Text style={styles.review}>Detail Screen good</Text>
        </View>
    )
}
export default Detail;