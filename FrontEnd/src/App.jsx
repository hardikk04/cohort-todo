import React, { useEffect, useState } from "react";
import axios from "./utils/axios";
import Todo from "./components/Todo";

const App = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const getTodos = async () => {
    const { data } = await axios.get("/todos");
    setTodo(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="p-[3vw]">
      <form
        action=""
        className="flex gap-[2vw]"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await axios.post("/todo", {
            title,
            isComplete: false,
          });
          setTitle("");
          getTodos();
        }}
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name="title"
          placeholder="TASK TITLE"
          value={title}
        />
        <button type="submit" className="px-2 py-1 bg-blue-500 text-white">
          Add Task
        </button>
      </form>
      <div className="mt-[4vw] flex gap-8">
        {todo.map((d, i) => (
          <Todo key={i} data={d}></Todo>
        ))}
      </div>
    </div>
  );
};

export default App;
