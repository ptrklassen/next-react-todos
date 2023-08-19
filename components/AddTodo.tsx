import { Dispatch, SetStateAction } from "react";
import { useRef } from "react";

export type Todos = {
  todos: Todo[];
};

export type SetTodos = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export type Todo = {
  id: number;
  text: string;
  done: boolean;
  dateAdded: Date;
  dateCompleted?: Date;
};

export type TodoStateProps = {
  todos: Todos;
  setTodos: SetTodos;
};

export type TodoActionProps = {
  todo: Todo;
  setTodos: SetTodos;
};

export default function AddTodo({ setTodos }: SetTodos): JSX.Element {
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
      dateAdded,
    };
    // const target = event.target as typeof event.target & {
    //   addTodo: { value: string };
    // };
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
