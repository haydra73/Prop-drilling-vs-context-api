import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewToDo from "./components/NewToDo";
import { useState } from "react";

function App() {
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

  return (
    <>
      <div className="container mx-auto pt-24 items-stretch text-center h-[100%]">
        <div className="flex justify-between items-center">
          <h1 className="text-6xl font-Poppins m-10 font-bold text-white">
            TO-DO
          </h1>
          <span className="text-xl text-[#222]">
            Created by {" "}
            <a href="https://haydermoke.com" target="_blank" className="font-semibold text-white">
               Hayder Yimer
            </a>
          </span>
        </div>

        <NewToDo onAddToDo={onAddToDoHandler} />
        <Todos items={todoList} onRemoveToDo={onRemoveToDoHandler} />
      </div>
    </>
  );
}

export default App;
