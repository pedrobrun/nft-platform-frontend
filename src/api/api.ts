import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://nft-platform-api.herokuapp.com/'
})