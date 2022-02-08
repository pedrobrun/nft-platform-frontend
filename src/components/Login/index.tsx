import { Button, Col, Form, Input, Row, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Api } from "../../api/api";
import {getUserLocalStorage, setUserLocalStorage} from "../../context/Auth/util";
import { useState } from "react";

export const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);


  const onFinish = (values: {username: string, password: string}) => {
    setLoading(true);
    const username = values.username;
    const password = values.password;
    Api.post('/user/login', { username, password }).then((r) => {
      const username = r.data.authenticated.username;
      const token = r.data.authenticated.token;
      setUserLocalStorage({usrname: username, token: token})
      history.replace('nft');
    }).catch((e) => { message.error('Invalid username or password') }).finally(() => {
      setLoading(false);
    })
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
        { loading? <h3>loading...</h3> :    
          <Form.Item wrapperCol={{offset: 6}}>
            <Button type="primary" htmlType="submit" size="large">
              Login
            </Button>
          </Form.Item>
        }
        </Form>
      </Col>
    </Row>
  );
};
