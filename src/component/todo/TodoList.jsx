import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ title, todos, setTodos }) => {
    const ulStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
    };
    const liStyle = {
        border: "3px solid green",
        borderRadius: "8px",
        width: "300px",
        height: "200px",
        position: "relative",
        padding: "10px",
    }
    return (
        <div>
            <h3 style={{
                padding: "10px",
                fontSize: "1.7em",
                fontWeight: "bold",
            }}>{title}</h3>
            <ul style={ulStyle}>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.id} style={liStyle}>
                                <TodoItem todo={todo} setTodos={setTodos} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList