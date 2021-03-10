import { Button, Input, Space } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "../api/user";

const Login = () => {
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    const { username, password } = data;
    handleLogin(username, password);
  };

  useEffect(() => {
    register({ name: "username" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  return (
    <Space direction="vertical">
      <Input
        name="username"
        placeholder="Username"
        onChange={(e) => setValue("username", e.target.value)}
      />
      <Input.Password
        name="password"
        placeholder="Password"
        onChange={(e) => setValue("password", e.target.value)}
      />
      <Button type="primary" onClick={handleSubmit(onSubmit)}>
        Login
      </Button>
    </Space>
  );
};

export default Login;
