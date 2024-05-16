import React, { useState } from 'react'
import TodoFalse from './component/TodoFalse'
import TodoTrue from './component/TodoTrue'

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

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
  };

  const [todos, setTodo] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
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
    setTitle("");
    setBody("");

  };

  const handleDeleteTodo = (id) => {
    const cleanedTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodo(cleanedTodos);
  }

  const handleClickIsDone = (id) => {
    const changeTodo = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.isDone) {
          todo.isDone = false;
        } else {
          todo.isDone = true;
        }
      }
      return todo;
    }

    );
    setTodo(changeTodo);

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
        <h1>Working</h1>
        <section id='isWorking'
          style={sectionStyle}>
          {
            todos.filter((todo) => {
              return (todo.isDone) === false;
            }).map((todo) => {
              return (
                <TodoFalse
                  key={todo.id}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleClickIsDone={handleClickIsDone}
                />
              );
            })
          }
        </section>
        <h1>Done</h1>
        <section id='isDone'
          style={sectionStyle}>
          {
            todos.filter((todo) => {
              return todo.isDone === true;
            }).map((todo) => {
              return (
                <TodoTrue
                  key={todo.id}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleClickIsDone={handleClickIsDone}
                />
              );
            })
          }
        </section>
      </main>
    </>
  )
}

export default App