import React, { createContext, ReactNode, useState } from "react";
import Todo from "../../models/todo";

interface TodosContextProps {
  items: Todo[];
  onAddToDo: (text: string) => void;
  onRemoveToDo: (toDoId: string) => void;
}

export const TodosContext = React.createContext<TodosContextProps>({
  items: [],
  onAddToDo: () => {},
  onRemoveToDo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children?: ReactNode }> = (props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onAddToDoHandler = (data: string) => {
    const newTodo = new Todo(data);

    setTodoList((prevState) => prevState.concat(newTodo));
  };

  const onRemoveToDoHandler = (toDoId: string) => {
    setTodoList((prevState) =>
      prevState.filter((todoItem) => todoItem.id !== toDoId)
    );
  };


  const contextValue: TodosContextProps = {
    items: todoList,
    onAddToDo: onAddToDoHandler,
    onRemoveToDo: onRemoveToDoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
  );
};


export default TodosContextProvider;