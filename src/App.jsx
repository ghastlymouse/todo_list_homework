import React, { useState } from 'react'
import TodoFalse from './components/TodoFalse'
import TodoTrue from './components/TodoTrue'

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
    justifyContent: "center",
    gap: "10px",
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

  const handleClickIsDone = (id) => {
    const chagneTodo = todos.filter((todo) => {
      return todo.id === id;
    })

    if (chagneTodo[0].isDone) {
      chagneTodo[0].isDone = false;
      return setTodo([...todos, chagneTodo]);
    } else {
      chagneTodo[0].isDone = true;
      return setTodo([...todos, chagneTodo]);
    }
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