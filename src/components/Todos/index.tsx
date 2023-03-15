import React, { ReactNode, useContext } from "react";
import { TodosContext } from "../../context/todos-context";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem";

const Todos: React.FC = (props) => {

  const todoCtx= useContext(TodosContext);

  return (
    <ul className="mt-24 mx-auto max-w-4xl h-[60vh]">
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveToDo={todoCtx.onRemoveToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
