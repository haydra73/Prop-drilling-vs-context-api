import Todos from "./components/Todos";

import NewToDo from "./components/NewToDo";
import TodosContextProvider from "./context/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <div className="container mx-auto pt-24 items-stretch text-center h-[100%]">
        <div className="flex justify-between items-center">
          <h1 className="text-6xl font-Poppins m-10 font-bold text-white">
            TO-DO
          </h1>
          <span className="text-xl text-[#222]">
            Created by{" "}
            <a
              href="https://haydermoke.com"
              target="_blank"
              className="font-semibold text-white"
            >
              Hayder Yimer
            </a>
          </span>
        </div>

        <NewToDo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
