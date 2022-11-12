import React, { useEffect, useState } from "react";
import { baseManager } from "../../../network/baseManager";
import { Table, Button } from "antd";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    baseManager.getALL("/categories").then((data) => {
      setCategories(data);
    });
  };

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
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button danger onClick={() => removeCategory(id)}>
          Delete
        </Button>
      ),
    },
  ];

  const removeCategory = (id) => {
    baseManager.delete("/categories/", id).then(() => {
      getCategories();
    });
  };

  return (
    <>
      <Table dataSource={categories} columns={columns}></Table>
    </>
  );
};

export default CategoryList;
