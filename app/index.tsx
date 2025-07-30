import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from "react";
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
interface ITTodo {
    id: number,
    name: string
}

export default function App() {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState<ITTodo[]>([]);
    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function handelAddTodo() {
        if (!todo) {
            Alert.alert("Lỗi nhập todo",
                "Không được để trống",
                [
                    {
                        text: 'Ask me later',
                        onPress: () => console.log('Ask me later pressed'),
                    },
                    {
                        text: 'Hủy',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ])
            return;
        }
        setListTodo([...listTodo, { id: randomInteger(1, 10000), name: todo }]);
        setTodo("");
    }

    const deleteTodo = (id: number) => {
        const newTodos = listTodo.filter(item => item.id !== id);
        setListTodo(newTodos)

    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                {/**Header */}
                <Text style={styles.header}>TaoDo App</Text>

                {/** form*/}
                <View style={styles.form}>
                    <TextInput style={styles.todoInput}
                        value={todo}
                        onChangeText={(value) => setTodo(value)} />
                    <Button title="Add todo"
                        onPress={() => { handelAddTodo() }} />
                </View>

                {/** list todo */}
                <View style={styles.todo}>
                    <FlatList
                        data={listTodo}
                        keyExtractor={item => item.id + ""}
                        renderItem={({ item }) => {
                            //Có thể thay View và Pressable
                            {/**<TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                <Text style={styles.todoItem}>{item.name}</Text>
                            </TouchableOpacity> */}
                            return (
                                <Pressable
                                    style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                                    onPress={() => deleteTodo(item.id)}>
                                    <View style={styles.groupTodo}>
                                        <Text style={styles.todoItem}>{item.name}</Text>
                                        <Entypo name="trash" size={24} color="black" />
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 40,
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'red',
    },
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: "green",
        padding: 5,
        marginHorizontal: 15,
        margin: 15
    },
    body: {
        paddingHorizontal: 10,
        marginBottom: 20,
        flex: 1,
    },
    todoItem: {
        fontSize: 20,
       // marginBottom: 20,
      
    },
    todo: {
        flex: 12
    },
    form: {
        flex: 1,

    },
    groupTodo:{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 15,
        justifyContent: "space-between",
        padding: 10,
        marginHorizontal: 10,
    }
})