import { Table } from "antd";
import React, { useContext } from "react";
import { todoContext } from "../../../TodoContex";

const TodoListPage = () => {
  const { todos, setTodos } = useContext(todoContext);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={todos} />
    </>
  );
};

export default TodoListPage;
