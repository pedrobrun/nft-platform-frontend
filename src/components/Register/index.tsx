import { Button, Col, Form, Input, message, Row } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from "react";
import { Api } from "../../api/api";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();

  const onFinish = (values: {username: string, password: string }) => {
    const username = values.username;
    const password = values.password;
    Api.post('/user/register', { username, password }).then(() => {
      history.replace('/login');
      message.success("Succesfully registered! Sign in to be able to create your NFT's")
    }).catch((e) => { console.log(e.message) })
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    > 
      <Col span={12}>
        <Form
          name="register"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 16 }}
          // apparentely label align is not working
          // https://github.com/ant-design/ant-design/issues/16067
          labelAlign="left"
          onFinish={onFinish}
        >

          
          <Form.Item label="Username" name="username">
            <Input placeholder="johndoe" size="large" prefix={<UserOutlined/>}></Input>
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="*******" size="large" prefix={<LockOutlined/>}></Input.Password>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>

        </Form>
      </Col>
    </Row>
  )
};
