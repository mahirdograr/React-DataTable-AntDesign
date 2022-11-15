import { Form, Input, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { baseManager } from "../../../network/baseManager";

const AddCategory = () => {
  let navigate = useNavigate;

  const onFinish = (values) => {
    baseManager
      .add("/categories", values)
      .then((data) => {
        console.log("data", data);
      })
      .finally(() => {
        navigate("/admin/categories");
      });
  };

  return (
    <>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCategory;
