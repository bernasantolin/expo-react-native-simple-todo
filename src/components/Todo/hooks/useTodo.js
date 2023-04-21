import { useState } from 'react';
import { customAlphabet } from 'nanoid/non-secure'

export default function useComment() {
    const nanoid = customAlphabet('1234567890abcdef', 10)
    const [todoList, setTodoList] = useState([]);
    const [todoText, setTodoText] = useState("");
    const [todoIndex, setTodoIndex] = useState(-1);

    const addTodo = () => {
        const newTodo = {
            text: todoText,
            id:nanoid(),
        };

        setTodoList([...todoList, newTodo]);
    }

    const updateTodo = () => {
        const refreshTodoList = todoList.map(
            (todo, i)=>todoIndex === i 
            ? { text: todoText, id: todo.id } 
            : todo
        );
        setTodoIndex(-1);

        setTodoList(refreshTodoList);
    }

    const handleSetText = text => setTodoText(text);

    const handleAddTodo = () => {
        if (todoText) {
            todoIndex > -1 ? updateTodo() : addTodo();
            setTodoText("");
        }
    };

    const handleEditTodo = (id) => {
        let index = todoList.findIndex(item => item.id === id)
        let _newArr = todoList.filter(item => item.id === id)[0];
        setTodoIndex(index);
        setTodoText(_newArr?.text);
    };

    const handleDeleteTodo = (id) => {
        let _newArr = todoList.filter(item => item.id !== id);
        setTodoList(_newArr);
    };

    return {
        todoList,
        todoText,
        todoIndex,
        handleSetText,
        handleAddTodo,
        handleEditTodo,
        handleDeleteTodo
    }
}