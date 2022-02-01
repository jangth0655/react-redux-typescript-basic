import React, { useState } from "react";
import "./App.css";
import { addToDo, deleteToDo } from "./slices/ToDoslice";
import { useAppDispatch, useAppSelector } from "./store";

function App() {
  const [text, setText] = useState("");
  const toDos = useAppSelector((state) => state.todoSlice);
  const dispatch = useAppDispatch();
  console.log(toDos);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addToDo({ text, id: Date.now() }));

    setText("");
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onDelete = (id: number) => {
    dispatch(deleteToDo(id));
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={text}
          placeholder="Write your toDo"
        />
        <button>ADD</button>
      </form>
      {toDos &&
        toDos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.text}</h1>
            <button onClick={() => onDelete(todo.id)}>DEL</button>
          </div>
        ))}
    </div>
  );
}

export default App;
