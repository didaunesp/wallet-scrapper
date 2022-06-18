import { Request, Response } from "express";
import getProvider from "./getProvider";
import { ethers } from "ethers";

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
  return 0;
};

export default getbalance;
