import {
  Button,
  Col,
  Form,
  Input,
  Row,
  message,
  Typography,
} from "antd";
const { Text } = Typography;
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../../api/api";
import { getUserLocalStorage } from "../../context/Auth/util";

export const AddNft = () => {
  const history = useHistory();
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<any>();
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);

  const u = getUserLocalStorage();

  useEffect(() => {
    const u = getUserLocalStorage();
    setUser(u.usrname);
    setToken(u.token);
  }, []);

  const fileSelectedHandler = (e: any) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const onFinish = (values: {
    title: string;
    description: string;
    usdFloorPrice: string;
    file: any;
  }) => {
    setLoading(true);
    const fd = new FormData();
    console.log(fd);
    fd.append("file", file);
    fd.append("title", values.title);
    fd.append("description", values.description);
    fd.append("usdFloorPrice", values.usdFloorPrice);
    fd.append("creator", user);
    Api.post("/nft/create", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        history.replace("/nft");
        message.success("You have succesfully created your NFT!");
      })
      .catch((e) => {
        message.error("Not able to create NFT");
      }).finally(() => {
        setLoading(true);
      });
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Text>Creator of this NFT is: {user}</Text>

      <Col span={10} offset={1}>
        <Text>You must fill all fields to be able to create your NFT.</Text>
        <p></p>
        <Form
          name="login"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item name="title" required={true}>
            <Input
              size="large"
              placeholder="NFT title/name"
              required={true}
            ></Input>
          </Form.Item>

          <Form.Item name="usdFloorPrice" required={true}>
            <Input
              size="large"
              placeholder="Floor price in Dolars"
              required={true}
            ></Input>
          </Form.Item>

          <Form.Item name="description">
            <Input.TextArea size="large" placeholder="Description" />
          </Form.Item>

          <Form.Item name="file" required={true}>
            <input type="file" onChange={fileSelectedHandler} />
          </Form.Item>
          { loading? <h3>loading...</h3> :    
            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button type="primary" htmlType="submit" size="large">
                Create
              </Button>
            </Form.Item>
          }
        </Form>
      </Col>
    </Row>
  );
};
