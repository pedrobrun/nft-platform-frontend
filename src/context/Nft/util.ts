import { Api } from "../../api/api"

export async function getAll(accessToken: string) {
  try{
    const req = await Api.post(
      "/nft/list", 
      { headers: {
        "Authorization": accessToken
    }});
    return req.data;
  }catch(e){
    return null;
  }
}