import { ethers } from "ethers";
import "dotenv/config";

const nodeConnection = async () => {
  try {
    const nodeUrl = process.env.NODE_URL;
    const apiKey = process.env.API_KEY;

    const test = new ethers.providers.JsonRpcProvider(
      nodeUrl + "?api_key=" + apiKey
    );
    console.log(await test.getNetwork());
  } catch (error) {
    console.log(error);
  }
};

export default nodeConnection;
