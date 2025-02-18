import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const handleToggle = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div className="app-container">
      <h1 className="app-header">My Todo App</h1>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{
              textDecoration: todo.done ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;