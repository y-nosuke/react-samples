const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px",
};

export const InputTodo = (props: any) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
