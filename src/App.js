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
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
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