import { Button, Typography, Image, Divider, message, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import {getUserLocalStorage} from "../../context/Auth/util";
import { Api } from "../../api/api";
import { PlusOutlined, UserDeleteOutlined } from '@ant-design/icons';
import './styles.css'
const { Title, Text } = Typography;

export const NftDisplayer = () => {
  

  var [info, setInfo] = useState<any>([{}])
  const [text, setText] = useState('');

  const user = getUserLocalStorage();
  const accessToken = user.token;
  const username = user.usrname;

  useEffect(() => {
    Api.get('/nft/list', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((r: any) => {
      setInfo(r.data)
    });
    
  });

  const handleDelete = async (id: string) => {
    console.log('oi')
    Api.post(`/nft/delete`, { id, username }, { headers: {
      'authorization': `Bearer ${accessToken}`
    }}).then((r) => {
      message.success('Nft successfully deleted!');
    });
  }


  return (
       <div className="App">
         <Title>NFTs Listing</Title>
         <Row justify="center">
          <Col>
         <Button href='/add' size="large" type="primary" icon={<PlusOutlined/>}>Add NFT</Button>
          </Col>

         </Row>
         <ul className="nfts-list">
           {info.length ? info.map((nft: any) => {
            return (
              <li key={nft._id} className="grid-item">
                <div className="nft-container">
                <Image src={nft.file} />
                <Divider></Divider>
                <Title level={5}>{nft.title}</Title>
                <p>USD Floor Price: {nft.usdFloorPrice}</p>
                <p>Description: {nft.description}</p>
                <p>Creator: {nft.creator}</p>
                {nft.creator == user.usrname ? 
                <Button danger shape="round" type="primary" size="small"
                onClick={() => {handleDelete(nft._id)}}
                >DELETE</Button>
              : <></>}
                <p></p>
                </div>
              </li>
            )
          }) :  <h1>No Nft's to show yet.</h1>}
        </ul>
      </div>
    );
};
