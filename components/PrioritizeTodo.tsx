import { Todo, TodoActionProps } from "./AddTodo";

export default function PrioritizeTodo(props: TodoActionProps): JSX.Element {
  const { todo, setTodos } = props;
  //TODO discover and update event from any to appropriate type
  function handleChangePriority(event: any) {
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
    { value: 0, text: "Priority" },
    { value: 5, text: "Frog" },
    { value: 4, text: "Today" },
    { value: 3, text: "This week" },
    { value: 2, text: "This month" },
    { value: 1, text: "Future" },
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
