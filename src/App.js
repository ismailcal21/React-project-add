import React, { useState } from "react";

function App() {
  const [textTodos, setTextTodos] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textTodos === "") {
      alert("This can not be empty");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: textTodos,
      isDone: false,
      date: new Date(),
    };
    setTodos([newTodo, ...todos]);
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
            <div className="alert alert-secondary my-5" role="alert">
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
