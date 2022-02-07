import { Button, Col, Row, Typography, Space, Image, Divider, message } from "antd";
import { LoginOutlined, FormOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import {setUserLocalStorage} from "../../context/Auth/util";
const { Title, Text } = Typography;

export const Home = () => {

  useEffect(() => {
    message.info("NOTE: Your first request might take a while to finish, because this application is hosted on Heroku. After the first one it will be faster! :)", 15)
    setUserLocalStorage(null);
  });

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Col
      >
        <Row
         justify="center"
         align="middle"
        >
      {/**
       * had to use img tag because I didn't figure out how to make Antd's Image component unclickable 
       */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/NFT_Icon.png" width={150} height={150}/>
        <Divider></Divider>
        </Row>
        <Title>
          Welcome to our Mock NFT Platform!
        </Title>
        <Row
        justify="center"
        align="middle"
        >
        </Row>
        <Row
        justify="center"
        align="middle"
        >
         <Space size={[100, 20]} wrap>
            <Button type="primary" size="large" icon={<LoginOutlined/>} href="http://localhost:3000/login">
              Login
            </Button>

            <Button type="default" size="large" icon={<FormOutlined/>} href="http://localhost:3000/register">
              Register
            </Button>
         </Space>
        </Row>
      </Col>
    </Row>
  );
};
