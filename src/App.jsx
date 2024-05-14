import React, { useState } from 'react'

const App = () => {
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
  };

  const inputStyle = {
    height: "35px",
    borderRadius: "8px",
  };

  const mainStyle = {
    display: 'flex',
    flexDirection: "column",
  };

  const todoCardStyle = {
    border: "3px solid green",
  };

  const [todos, setTodo] = useState([]);

  const [title, setTtitle] = useState("");
  const [body, setBody] = useState("");

  const handleInputTitle = (event) => {
    setTtitle(event.target.value);
  };

  const handleInputBody = (event) => {
    setBody(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      body: body,
      isDone: false,
    };
    setTodo([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const cleanedTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodo(cleanedTodos);
  }

  const handleClickDone = (id) => {
    const chagneTodo = todos.filter((todo) => {
      return todo.id === id;
    })
    chagneTodo[0].isDone = true;
    setTodo([...todos, chagneTodo]);
  };

  const handleClickCancel = (id) => {
    const chagneTodo = todos.filter((todo) => {
      return todo.id === id;
    })
    chagneTodo[0].isDone = false;
    setTodo([...todos, chagneTodo]);
  };

  return (
    <>
      <header>
        <h1>My Todo List</h1>
        <form style={formStyle} onSubmit={addTodo}>
          <input onChange={handleInputTitle} value={title} style={inputStyle} type='text' placeholder='제목을 입력' required />
          <input onChange={handleInputBody} value={body} style={inputStyle} type='text' placeholder='내용을 입력' required />
          <button type='submit'>추가</button>
        </form>
      </header>
      <main style={mainStyle}>
        <section id='isWorking'>
          <h1>Working</h1>
          {
            todos.filter((todo) => {
              return (todo.isDone) === false;
            }).map((todo) => {
              return (
                <div key={todo.id} style={todoCardStyle}>
                  <h1>{todo.title}</h1>
                  <p>{todo.body}</p>
                  <button onClick={()=>handleDeleteTodo(todo.id)}>삭제하기</button>
                  <button onClick={()=>handleClickDone(todo.id)}>완료</button>
                </div>
              );
            })
          }
        </section>
        <section id='isDone'>
          <h1>Done</h1>
          {
            todos.filter((todo) => {
              return todo.isDone === true;
            }).map((todo) => {
              return (
                <div key={todo.id} style={todoCardStyle}>
                  <h1>{todo.title}</h1>
                  <p>{todo.body}</p>
                  <button onClick={()=>handleDeleteTodo(todo.id)}>삭제하기</button>
                  <button onClick={()=>handleClickCancel(todo.id)}>취소</button>
                </div>
              );
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
