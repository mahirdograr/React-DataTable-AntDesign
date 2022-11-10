import React, { useEffect, useState } from "react";
import { baseManager } from "../../../network/baseManager";
import { Table } from "antd";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    baseManager.getALL("/categories").then((data) => {
      setCategories(data);
    });
  }, []);

  let columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];

  return (
    <>
      <Table dataSource={categories} columns={columns}></Table>
    </>
  );
};

export default CategoryList;
