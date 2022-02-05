import { Button, Typography} from "antd";
import React, { useEffect, useState } from "react";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { Api } from "../../api/api";
import { PlusOutlined } from '@ant-design/icons';
import './styles.css'
const { Title, Text } = Typography;

export const NftDisplayer = () => {
  

  const [info, setInfo] = useState<any>([{}])
  const [text, setText] = useState('');

  const user = getUserLocalStorage();
  const accessToken = user.token;

  useEffect(() => {

    Api.get('/nft/list', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((r: any) => {
      setInfo(r.data)
    });
    
  })


  return (
       <div className="App">
         <Title>NFTs Listing</Title>
         <Button href='http://localhost:3000/addnft' size="large" type="primary" icon={<PlusOutlined/>}>Add NFT</Button>
         <ul className="nfts-list">
           {info.map((nft: any) => {
            return (
              <li key={nft._id} className="grid-item">
                <div className="nft-container">
                <img src={nft.file}></img>
                <p>{nft.title}</p>
                <p>{nft.usdFloorPrice}</p>
                <p>{nft.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
};
