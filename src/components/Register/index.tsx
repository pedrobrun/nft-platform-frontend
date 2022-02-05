import { Button, Col, Form, Input, Row } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from "react";

export const Register = () => {
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
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // apparentely label align is not working
          // https://github.com/ant-design/ant-design/issues/16067
          labelAlign="left"
          onFinish={() => {}}
        ></Form>
        
        <Form.Item label="Username" name="username">
          <Input placeholder="johndoe" size="large" prefix={<UserOutlined/>}></Input>
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password placeholder="*******" size="large" prefix={<LockOutlined/>}></Input.Password>
        </Form.Item>

        <Form.Item label="Password confirmation" name="confirmpassword">
          <Input.Password placeholder="Your password again" size="large" prefix={<LockOutlined/>}></Input.Password>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Col>
    </Row>
  )
};
