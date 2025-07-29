import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from "react-native";

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
            alert("Is emty")
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
        <View style={styles.container}>
            {/**Header */}
            <Text style={styles.header}>TaoDo App</Text>

            {/** form*/}
            <View style={styles.body}>
                <TextInput style={styles.todoInput}
                    value={todo}
                    onChangeText={(value) => setTodo(value)} />
                <Button title="Add todo"
                    onPress={() => { handelAddTodo() }} />
            </View>

            {/** list todo */}
            <View style={styles.body}>
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
                                <Text style={styles.todoItem}>{item.name}</Text>
                            </Pressable>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 40
    },
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',

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
    },
    todoItem: {
        fontSize: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 10,
    }
})