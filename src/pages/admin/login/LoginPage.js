import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import { loginService } from "../../../service/loginService";
import { AuthContext } from "../../../store/AuthContext";

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);

  const onFinish = (values) => {
    let result = loginService.loginControl(values.email, values.password);

    if (result) {
      setAuth(result);
    } else {
      alert("email veya şifre hatalı");
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
