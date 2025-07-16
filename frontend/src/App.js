import React, { useState, useEffect } from "react";
import { api } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    api.get("/").then(res => setTodos(res.data));
  }, []);

  const addTodo = () => {
    api.post("/", { title, description: "", completed: false })
      .then(res => setTodos([...todos, res.data]));
  };

  const deleteTodo = (id) => {
    api.delete(`/${id}`).then(() => setTodos(todos.filter(t => t.id !== id)));
  };

  return (
    <div>
      <h1>TODO App</h1>
      <input onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.title} <button onClick={() => deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;