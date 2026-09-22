import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // ToDo追加
  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      alert("タスクが空です。内容を入力してください。");
      return;
    }

    setTodos([...todos, { id: Date.now(), title: trimmed, completed: false }]);
    setText("");
  };

  // ToDo削除
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 完了トグル
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <TodoInput text={text} setText={setText} onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
