import React, { useContext, useState } from "react";
import { todoContext } from "../../../TodoContex";

const AddTodoPage = () => {
  const [name, setname] = useState("");

  const { todos, setTodos } = useContext(todoContext);

  const addTodo = () => {
    let randomId = Math.floor(Math.random() * 1000);
    let newTodo = {
      id: randomId,
      name: name,

      //oluşturduğum todo objesini contexte gönderiyorum
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
    </>
  );
};

export default AddTodoPage;
