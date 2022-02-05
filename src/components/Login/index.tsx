import { Button, Col, Form, Input, Row, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from "../../context/AuthProvider/useAuth";
import React from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const history = useHistory();


  const onFinish = (values: {username: string, password: string}) => {
    
    try {
      console.log('a')
      auth.authenticate(values.username, values.password).then(() => history.push('nft/list'));
    } catch (e) {
      message.error('Invalid username or password.').then(() => {console.log(e)});
    }
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Col span={10} offset={2}>
        <Form
          name="login"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >

          <Form.Item name="username" required={true}>
            <Input size="large" placeholder="Username" prefix={<UserOutlined/>} required={true}>
              
            </Input>
          </Form.Item>

          <Form.Item name="password" required={true}>
            <Input.Password size="large" placeholder="Password" prefix={<LockOutlined/>} required={true}>

            </Input.Password>
          </Form.Item>

        <Form.Item wrapperCol={{offset: 6}}>
          <Button type="primary" htmlType="submit" size="large">
            Login
          </Button>
        </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
