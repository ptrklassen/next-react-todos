import { Dispatch, SetStateAction } from "react";
import { useRef } from "react";

export type Todos = Todo[];

export type SetTodos = Dispatch<SetStateAction<Todo[]>>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
  priority: number;
  dateAdded: Date;
  dateCompleted?: Date;
};

type SetTodosProps = {
  setTodos: SetTodos
}

export type TodoStateProps = {
  todos: Todos;
  setTodos: SetTodos;
};

export type TodoActionProps = {
  todo: Todo;
  setTodos: SetTodos;
};

export default function AddTodo(props: SetTodosProps): JSX.Element {
  const { setTodos } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddToDo(event: React.SyntheticEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!inputRef || !inputRef.current) {
      return;
    }
    const text = inputRef.current.value;
    const dateAdded = new Date();
    const todo = {
      id: Math.random(),
      text,
      done: false,
      priority: 0,
      dateAdded,
    };
    setTodos((previousTodos) => {
      return previousTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddToDo}>
      <input name="addTodo" placeholder="Add ToDo" ref={inputRef} />
      <button type="submit" style={{ marginLeft: 5 }}>
        Add
      </button>
    </form>
  );
}
