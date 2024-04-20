import React, { useState } from "react";
import { useDispatch } from "./TodoProvider";

let nextId = 4;

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  return (
    <div className="add-todo-container">
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (dispatch) {
            dispatch({
              type: "add",
              id: nextId++,
              text,
            });
          }
        }}
      >
        Add
      </button>
    </div>
  );
}