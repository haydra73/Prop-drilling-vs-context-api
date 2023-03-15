import React, { ReactNode } from "react";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem";

interface containerProps {
  children?: ReactNode;
  items: Todo[];
  onRemoveToDo: (id: string) => void;
}

const Todos: React.FC<containerProps> = (props) => {
  return (
    <ul className="mt-24 mx-auto max-w-4xl h-[60vh]">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveToDo={props.onRemoveToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
