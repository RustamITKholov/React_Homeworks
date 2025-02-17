/**
 * Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.
 */

import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../TodoList.css'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function TodoList() {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(['Прибраться в доме', 'Выгулять собаку']);

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    }

    const deleteTodo = (i) => {
        setTodos(todos.filter((_, index) => index !== i));
    }

    return (
        <>
            <h2 style={{ marginTop: '50px' }}>Список дел</h2>
            <div className="fieldTodo">
                <TextField
                    id="outlined-read-only-input"
                    label="Что нужно сделать"
                    fullWidth
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <Button className="addBtn" variant="contained" onClick={addTodo}>Добавить</Button>
            </div>
            <List className={todos.length > 0 ? 'card' : ''}>
                {todos.map((value, index) => (
                    <ListItem
                        key={value}
                        disableGutters
                        className="cardItem"
                        secondaryAction={
                            <IconButton aria-label="delete" size="large">
                                <DeleteIcon onClick={() => deleteTodo(index)} sx={{ color: 'red' }} fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={value} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default TodoList;