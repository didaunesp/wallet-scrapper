import getProvider from "./getProvider";
import { ethers } from "ethers";
import ERC20 from "./ERC20";

const getbalance = async (address: string): Promise<string> => {
  try {
    const provider = await getProvider();
    const balance = await provider.getBalance(
      "0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5"
    );
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.log(error);
    throw new Error(`Error on getting balance for address: ${address}`);
  }
};

const getERC20Balance = async (contract: string, address: string) => {
  const provider = await getProvider();
  console.log("contract :>> ", contract);
  console.log("address :>> ", address);
  const erc20 = new ethers.Contract(contract, ERC20, provider);
  const balance = await erc20.balanceOf(address);
  return ethers.utils.formatEther(balance);
};

export { getbalance, getERC20Balance };
