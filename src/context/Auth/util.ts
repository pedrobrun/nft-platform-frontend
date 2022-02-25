import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
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