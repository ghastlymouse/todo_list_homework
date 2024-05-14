import React from 'react'
import Button from './Button';

const TodoTrue = ({ todo, handleDeleteTodo, handleClickIsDone }) => {
  const { title, body, id } = todo;

  const todoCardStyle = {
    border: "3px solid green",
    borderRadius: "8px",
    width: "300px",
    height: "300px",
    position: "relative",
  };
  const buttonStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  };
  return (
    <div key={id} style={todoCardStyle}>
      <h1>{title}</h1>
      <p>{body}</p>
      <div style={buttonStyle}>
        <Button color="red" onClick={() => handleDeleteTodo(id)}>삭제하기</Button>
        <Button color="black" onClick={() => handleClickIsDone(id)}>취소</Button>
      </div>
    </div>
  );
};

export default TodoTrue