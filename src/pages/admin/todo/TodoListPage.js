import { Button, Table } from "antd";
import React, { useContext } from "react";
import { todoContext } from "../../../store/TodoContex";

const TodoListPage = () => {
  const { todos, setTodos } = useContext(todoContext);

  const deleteTodo = (id) => {
    let newTodos = todos.filter((q) => q.id != id);

    setTodos([...newTodos]);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => <Button onClick={() => deleteTodo(id)}>Delete</Button>,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={todos} />
    </>
  );
};

export default TodoListPage;
