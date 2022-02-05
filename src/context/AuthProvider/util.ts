import axios from "axios";
import { Api } from "../../api/api"
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  console.log(user);
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage () {
  const jsonStr = localStorage.getItem("u");

  if(!jsonStr) {
    return null; 
  }

  const user = JSON.parse(jsonStr);

  return user ?? null;
}

export async function loginRequest (username: string, password: string) {
  try {
    console.log(username, password)
    const req = await axios.post("https://nft-platform-api.herokuapp.com/user/login", { username, password }, 
    );
    console.log(req)
    return req.data;
  } catch(e) {
    console.log(e)
    return null
  }
}