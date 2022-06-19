import { ethers } from "ethers";
import "dotenv/config";
import ERC20 from "./ERC20";

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

const getbalance = async (address: string): Promise<string> => {
  try {
    const provider = await getProvider();
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.log(error);
    throw new Error(`Error on getting balance for address: ${address}`);
  }
};

const getERC20Balance = async (contract: string, address: string) => {
  try {
    const provider = await getProvider();
    const erc20 = new ethers.Contract(contract, ERC20, provider);
    const balance = await erc20.balanceOf(address);
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.log(error);
    throw new Error(
      `Error on getting balanceof contract ${contract}, for address ${address}`
    );
  }
};

export { getbalance, getERC20Balance };
