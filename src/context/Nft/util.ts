import { Api } from "../../api/api"

export async function getAll(accessToken: string) {
  try{
    const req = await Api.post(
      "/nft/list", 
      { headers: {
        "Authorization": accessToken
    }});
    console.log(req.data)
    return req.data;
  }catch(e){
    console.log(e);
    return null;
  }
}