import DeleteTodo from "./DeleteTodo";
import PrioritizeTodo from "./PrioritizeTodo";
import { SetTodos, Todos, Todo } from "./AddTodo";
import { ActiveTab } from "./TabGroup";

type TodoListProps = {
  todos: Todos;
  setTodos: SetTodos;
  activeTab: ActiveTab;
};

export default function TodoList(props: TodoListProps): JSX.Element {
  const { todos, setTodos, activeTab } = props;
  let filteredTodos = [];
  switch (activeTab) {
    case "Open":
      filteredTodos = todos.filter((todo: Todo) => !todo.done);
      break;
    case "Done":
      filteredTodos = todos.filter((todo: Todo) => todo.done);
      break;
    default:
      filteredTodos = [...todos];
  }
  //helper function to toggle 'done' state
  function handleToggleTodo(todo: Todo) {
    const updatedTodos = todos.map((todoListItem: Todo) =>
      todoListItem.id === todo.id
        ? {
            ...todoListItem,
            done: !todoListItem.done,
            dateCompleted: new Date(),
          }
        : todoListItem
    );
    setTodos(updatedTodos);
  }
  // display encouraging message/instructions to add todos if there are none
  if (!todos.length) {
    return (
      <p>Congratulations, your done! Take a breath, or add some new Todos!</p>
    );
  }
  return (
    <ul>
      {filteredTodos.map((todo: Todo) => {
        const dateMessage = todo.done
          ? `Completed on ${todo.dateCompleted}`
          : `Added on ${todo.dateAdded}`;
        return (
          <li
            onDoubleClick={() => handleToggleTodo(todo)}
            // renders done todo with linethrough
            style={{ textDecoration: todo.done ? "line-through" : "" }}
            key={todo.id}
          >
            {" "}
            <PrioritizeTodo todo={todo} setTodos={setTodos} /> {todo.text},{" "}
            {dateMessage}
            <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
        );
      })}
    </ul>
  );
}
