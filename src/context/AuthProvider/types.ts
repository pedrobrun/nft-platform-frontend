export interface IUser {
  usrname?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (username: string, password: string) => Promise<void>;

  logout: () => void;
}

export default interface IAuthProvider {
  children: JSX.Element;
}