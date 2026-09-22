function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todoItem">
      <label className="todoLabel">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todoCheckbox"
        />
        <span className={todo.completed ? "title completed" : "title"}>
          {todo.title}
        </span>
      </label>

      <button
        onClick={() => onDelete(todo.id)}
        className="delBtn"
      >
        削除
      </button>
    </li>
  );
}

export default TodoItem;
