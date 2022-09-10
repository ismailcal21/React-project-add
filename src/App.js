import React, { useState } from "react";

function App() {
  const [textTodos, setTextTodos] = useState("");
  const [todos, setTodos] = useState([]);

  const changeIsDone = (id) => {
    const searchedTodos = todos.find((item) => item.id === id);
    const updatedTodos = {
      ...searchedTodos,
      isDone: !searchedTodos.isDone,
    };
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos([updatedTodos, ...filteredTodos]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textTodos === "") {
      alert("This can not be empty");
      return;
    }
    const hasTodos = todos.find((item) => item.text === textTodos);
    console.log(hasTodos);
    if (hasTodos !== undefined) {
      alert("You have the todo already");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      text: textTodos,
      isDone: false,
      date: new Date(),
    };
    setTodos([newTodo, ...todos]);
    setTextTodos("");
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={textTodos}
            onChange={(event) => setTextTodos(event.target.value)}
            type="text"
            className="form-control"
            placeholder="Type..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button
            style={{ color: "white" }}
            className="btn btn-sm bg-success "
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
      {todos.length <= 0 ? (
        <div className="container text-center my-5">
          <h3>You dont have any todos yet</h3>
        </div>
      ) : (
        <div>
          {todos.map((item) => (
            <div
              className="alert alert-secondary my-3 d-flex justify-content-between"
              role="alert"
            >
              <p>{item.text}</p>
              <button
                onClick={() => changeIsDone(item.id)}
                className="btn btn-sm btn-success"
              >
                {item.isDone === false ? "Done" : "Undone"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
