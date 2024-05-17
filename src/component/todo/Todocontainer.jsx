import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "할 일 1",
            content: "할 일 1 : 내용",
            isDone: false,
        },
        {
            id: 2,
            title: "할 일 2",
            content: "할 일 2 : 내용",
            isDone: true,
        },
    ]);
    const workingTodos = todos.filter(todo => !todo.isDone);
    const doneTodos = todos.filter(todo => todo.isDone);

    return (
        <div>
            <h1 style={{
                fontSize: "2em",
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center",
            }}>My To-Do List</h1>
            <TodoForm setTodos={setTodos} />
            <div>
                <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
                <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
            </div>
        </div>
    )
};

export default TodoContainer