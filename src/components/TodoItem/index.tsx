import React, { ReactNode } from "react";

interface containerProps {
  key: string;
  text: string;
  onRemoveToDo: () => void;
}

const TodoItem: React.FC<containerProps> = (props) => {
  return (
    <li
      onClick={props.onRemoveToDo}
      className="py-8 px-12 rounded-full max-w-4xl  text-4xl bg-[#4047c1]  m-4 mx-auto cursor-pointer text-white hover:bg-[#4047c1] border-[#7980fc] shadow-sm border"
    >
      {props.text}
    </li>
  );
};

export default TodoItem;
