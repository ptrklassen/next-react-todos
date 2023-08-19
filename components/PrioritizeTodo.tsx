import { Todo, TodoActionProps } from "./AddTodo";

export default function PrioritizeTodo(props: TodoActionProps): JSX.Element {
  const { todo, setTodos } = props;
  function handleChangePriority(event) {
    event.preventDefault();
    const priorityValue = event.target.value;
    setTodos((prevTodos) => {
      return prevTodos.map((todoListItem: Todo) =>
        todoListItem.id === todo.id
          ? {
              ...todoListItem,
              priority: priorityValue,
            }
          : todoListItem
      );
    });
  }
  const options = [
    { value: "", text: "Priority" },
    { value: 1, text: "Frog" },
    { value: 2, text: "Today" },
    { value: 3, text: "This week" },
    { value: 4, text: "This month" },
    { value: 5, text: "Future" },
  ];
  return (
    <select
      name="priority"
      style={{ marginRight: 5, width: 90 }}
      value={todo.priority}
      onChange={handleChangePriority}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
