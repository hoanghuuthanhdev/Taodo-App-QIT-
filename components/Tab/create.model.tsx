import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

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
    groupInput: {
        marginBottom: 15,

    },
    text: {
        fontSize: 20,
        fontWeight: "400",
    },
    input: {
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
    addNew: any;
}
function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const CreateModel = (props: any) => {
    const [title, setTile] = useState("");
    const [star, setStar] = useState(0);
    const { modalVisible, setModalVisible, addNew } = props;
    const handelSubmit = () => {
        if (!title || star == 0) {
            Alert.alert('Vui lòng không để trống', 'Điền vào!', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Dạ', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }
        addNew({
            id: randomIntFromInterval(0,1000),
            title,
            star
        }); 
        setModalVisible(false);
        setTile("");
        setStar(0);
    }

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
                        <AntDesign onPress={() => {setModalVisible(false)
                                                   setStar(0)
                                                   setTile("")
                        }} name="close" size={24} color="black" />
                    </View>
                    {/** body */}
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Noi sung</Text>
                            <TextInput
                                value={title}
                                onChangeText={(v) => setTile(v)}
                                style={styles.input} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput
                                value={star.toString()}
                                onChangeText={v => setStar(Number(v))}
                                style={styles.input}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    {/**footer */}
                    <View style={{ marginTop: 20 }}>
                        <Button title='Add'
                            onPress={() => handelSubmit()} />
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default CreateModel;