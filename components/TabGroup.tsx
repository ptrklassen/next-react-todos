import { JsxElement } from "typescript";
import { ButtonHTMLAttributes, useState } from "react";
import { SetTodos, Todos } from "./AddTodo";
import styles from '@/styles/TabGroup.module.css'

const tabTypes: string[] = ["All", "Open", "Done"];

interface TabButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  active: Boolean;
}

function TabButton(props: TabButtonProps) {
    const { active, ...rest } = props;
    return <button {...rest} />
}

export default function TabGroup(
  { todos }: Todos,
  { setTodos }: SetTodos
) {
  const [active, setActive] = useState(tabTypes[0]);
  return (
    <div style={{ display: "flex" }}>
      {tabTypes.map((tabType) => (
        <TabButton
          key={tabType}
          active={active === tabType}
          onClick={() => setActive(tabType)}
          className={active === tabType ? `${styles.tab} ${styles.active}` : `${styles.tab}`}
        >
          {tabType}
        </TabButton>
      ))}
    </div>
  );
}
