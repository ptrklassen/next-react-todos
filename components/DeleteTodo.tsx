import { Todo, TodoActionProps } from "./AddTodo";

export default function DeleteTodo(props: TodoActionProps): JSX.Element {
  const { todo, setTodos } = props;
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t: Todo) => t.id !== todo.id);
      });
    }
  }
  return (
    <button
      onClick={handleDeleteTodo}
      style={{
        marginLeft: 10,
        cursor: "pointer",
        border: "none",
        backgroundColor: "white",
      }}
    >
      {"\u274C"}
    </button>
  );
}
