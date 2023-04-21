import React from 'react';
import { FlatList, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";

import useTodo from "./hooks/useTodo";

export default function Todo() {
    const {
        todoList,
        todoText,
        todoIndex,
        handleSetText,
        handleAddTodo,
        handleEditTodo,
        handleDeleteTodo
    } = useTodo();

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}> 
                <TextInput
                    value={todoText}
                    style={styles.textInput}
                    placeholder="What's on your mind ?"
                    onChangeText={text=>handleSetText(text)}
                />
                <TouchableOpacity onPress={()=>handleAddTodo()}>
                    <LinearGradient
                        style={styles.addBtn}
                        start={{ x: 0, y: 0}}
                        end={{x: 0.5, y: 0.5}}
                        colors={['#ffdd80', '#ffd46b', '#ffc758', '#ffb845', '#ffa932', '#ff9b1f']}
                    >
                        <Text style={styles.textBtn}>
                            {todoIndex !== -1 ? 'Save' : 'Add'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todoList}
                keyExtractor={keyExtractor}
                style={styles.list}
                renderItem={({ item, index }) => (
                    (index !== todoIndex) &&
                    <View key={item.key} style={styles.listItemContainer}>
                            <Text numberOfLines={1} style={[styles.taskContainer, styles.taskText]}>
                                {item.text}
                            </Text>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity 
                                style={styles.edit}
                                onPress={()=>handleEditTodo(item.id)}
                            >
                                <Text style={styles.edit}>&#9998;</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.remove}
                                onPress={()=>handleDeleteTodo(item.id)}
                            >
                                <Text>&#10060;</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                )}
            />
        </View>
    );
}