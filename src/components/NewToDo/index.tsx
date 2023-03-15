import React, { useRef } from "react";

const NewToDo: React.FC<{ onAddToDo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      alert("please put in a proper todo.");
      return;
    }

    props.onAddToDo(enteredText);

    inputRef.current!.value = "";
  };

  return (
    <form
      action="submit"
      onSubmit={submitHandler}
      className="flex flex-col max-w-4xl mx-auto justify-start m-4 items-stretch"
    >
      <label htmlFor="text" className="inline-flex text-2xl mb-2 font-semibold text-[#8f94fb]">
        What to do?
      </label>
      <input type="text" id="text" ref={inputRef} className="py-6 px-8 text-2xl placeholder-slate-200 rounded-full font-semibold text-[#444]" placeholder="Write your todo here"/>
      <button className="mt-4 py-4 px-8 bg-[#4047c1] text-white text-xl rounded-full cursor-pointer self-end hover:bg-[#545be2] ease-in duration-100 ">Add todo</button>
    </form>
  );
};

export default NewToDo;
