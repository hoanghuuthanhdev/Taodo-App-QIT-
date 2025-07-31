import { globalFont } from "@constants/const";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    about:{
        fontSize: 30,

    }
})

const About = ()=>{
    return (    
        <View>
            <Text style={[styles.about, globalFont.font]}>About Screen</Text>
        </View>
    )
}
export default About;