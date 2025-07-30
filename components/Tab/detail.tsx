import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: 'OpenSans-Regular'
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