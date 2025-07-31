import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    groupInput:{
        marginBottom: 15,

    },
    text:{
        fontSize: 20,
        fontWeight:"400",
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    }

})

interface IProp {
    modalVisible: boolean;
    setModelVisible: (v: IProp) => void;
}

const CreateModel = (props: any) => {
    const { modalVisible, setModalVisible } = props;
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    {/** header */}
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25 }}> Create a review 11</Text>
                        <AntDesign  onPress={() => setModalVisible(false)} name="close" size={24} color="black" />
                    </View>
                    {/** body */}
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Noi sung</Text>
                            <TextInput style={styles.input}/>
                        </View>
                         <View>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput style={styles.input} keyboardType='numeric'/>
                        </View>
                    </View>
                    {/**footer */}
                    <View style={{marginTop: 20}}>
                        <Button title='Add'/>
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default CreateModel;