import React from 'react'

const TodoItem = ({ todo, setTodos }) => {
    const { title, content, id, isDone } = todo;

    const handleClickDelete = () => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    };
    const handleClickIsDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const btnStyle = {
        position: "absolute",
        bottom: "10px",
        right: "10px",
    };
    return (
        <div>
            <h3 style={{
                fontSize: "1.3em",
                fontWeight: "bold",
            }}>{title}</h3>
            <p style={{
                marginTop: "5px",
            }}>{content}</p>
            <div style={btnStyle}>
                <button onClick={handleClickIsDone}>{isDone ? "취소" : "완료"}</button>
                <button style={{ backgroundColor: "red" }} onClick={handleClickDelete}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem