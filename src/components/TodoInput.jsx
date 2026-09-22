function TodoInput({ text, setText, onAdd }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onAdd();
  };

  return (
    <div className="inputArea">
      <input
        type="text"
        value={text}
        placeholder="新しいタスクを入力"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input"
      />

      <button onClick={onAdd} className="addBtn" aria-label="追加">
        追加
      </button>
    </div>
  );
}

export default TodoInput;
