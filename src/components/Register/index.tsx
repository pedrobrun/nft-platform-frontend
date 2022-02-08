import { Button, Col, Form, Input, message, Row, Spin } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Api } from "../../api/api";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";

export const Register = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: {username: string, password: string }) => {
    setLoading(true);
    const username = values.username;
    const password = values.password;
    Api.post('/user/register', { username, password }).then((r) => {
      history.replace('/login');
      message.success("Succesfully registered! Sign in to be able to create your NFT's")
    }).catch((e) => {
      message.error('Username probably already exists. Try again using other one!', 10)
    }).finally(() => setLoading(false));
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

          { loading ? <h3>loading...</h3> :
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type='primary' htmlType='submit'>
                Register
              </Button>
            </Form.Item>
          }

        </Form>
      </Col>
    </Row>
  )
};
