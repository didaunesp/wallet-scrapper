import { ethers } from "ethers";
import "dotenv/config";

const getProvider = async () => {
  try {
    const nodeUrl = process.env.NODE_URL;
    const apiKey = process.env.API_KEY;

    const provider = new ethers.providers.JsonRpcProvider(
      nodeUrl + "?api_key=" + apiKey
    );

    return provider;
  } catch (error) {
    console.log(error);
  }
};

export default getProvider;
