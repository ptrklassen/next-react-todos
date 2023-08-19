import { useState } from "react";
import { SetTodos, Todos } from "./AddTodo";
import styles from "@/styles/TabGroup.module.css";
import TodoList from "./TodoList";
import { TodoStateProps } from "./AddTodo";

const tabTypes: string[] = ["All", "Open", "Done"];

export type ActiveTab = {
  activeTab: string;
};

interface TabButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  active: Boolean;
}

function TabButton(props: TabButtonProps) {
  const { active, ...rest } = props;
  return <button {...rest} />;
}

export default function TabGroup(props: TodoStateProps): JSX.Element {
  const { todos, setTodos } = props;
  const [activeTab, setActiveTab] = useState(tabTypes[0]);
  console.log(activeTab);
  return (
    <>
      <div style={{ display: "flex" }}>
        {tabTypes.map((tabType) => (
          <TabButton
            key={tabType}
            active={activeTab === tabType}
            onClick={() => setActiveTab(tabType)}
            className={
              activeTab === tabType
                ? `${styles.tab} ${styles.active}`
                : `${styles.tab}`
            }
          >
            {tabType}
          </TabButton>
        ))}
      </div>
      <TodoList todos={todos} setTodos={setTodos} active={activeTab} />
    </>
  );
}
