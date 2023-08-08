import React, { useEffect, useState } from "react";
import {
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Form, Input, Typography, Button, Divider } from "antd";

import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

import Background from "./Background";

interface RegisterResponse {
  name: string;
}

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post<RegisterResponse>(
        "https://localhost:44332/api/Auth/register",
        {
          email,
          password,
          firstName,
          lastName,
        }
      );
      const data = response.data;
      console.log(data.name);
      alert("Register success !");
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status == 400) {
        alert("Error: " + error.response.data.message);
      } else {
        alert("Error");
      }
    }
  };
  return (
    <Background>
      <Form className="loginForm" onFinish={handleSubmit}>
        <Typography.Title>Register</Typography.Title>
        <Form.Item label="Email" name="email">
          <Input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
        </Form.Item>
        <Form.Item label="First name" name="firstName">
          <Input
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></Input>
        </Form.Item>
        <Form.Item label="Last name" name="lastName">
          <Input
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          ></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
        <span
          style={{
            cursor: "pointer",
            color: "blue",
            float: "right",
            fontSize: "18px",
          }}
        >
          <Link to="/login">Login</Link>
        </span>
        <Divider style={{ borderColor: "black" }}>or Login with </Divider>
        <div className="socialLogin">
          <GoogleOutlined
            className="socialIcon"
            style={{ color: "red" }}
          ></GoogleOutlined>
          <FacebookFilled className="socialIcon" style={{ color: "blue" }} />
          <TwitterOutlined className="socialIcon" style={{ color: "cyan" }} />
        </div>
      </Form>
    </Background>
  );
};

export default Register;
