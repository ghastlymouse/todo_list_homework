import React, { useState } from 'react'

const TodoForm = ({ setTodos }) => {
    const formStyle = {
        width: "100%",
        height: "70px",
        backgroundColor: "gray",
        display: "flex",
        gap: "30px",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "8px",
        padding: "10px",
    }

    const inputStyle = {
        height: "35px",
        borderRadius: "8px",
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const content = formData.get("content");

        if (!title.trim() || !content.trim()) {
            return alert("모든 항목을 제대로 입력해주세요!");
        }


        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            content: content,
            isDone: false,
        };
        event.target.reset();
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    return (
        <div>
            <form style={formStyle} onSubmit={handleSubmitForm}>
                <input style={inputStyle} type="text" placeholder="제목" name="title" required />
                <input style={inputStyle} type="text" placeholder="내용" name="content" required />

                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default TodoForm