import { Request, Response } from "express";
import getProvider from "./getProvider";
import { ethers } from "ethers";

const getbalance = async (address: string) => {
  try {
    const provider = await getProvider();
    const balance = await provider.getBalance(
      "0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5"
    );
    console.log();
    return ethers.utils.formatEther(balance.toString());
    //ethers.utils.
  } catch (error) {
    console.log(error);
    throw "Error on getting balance";
  }
};

const getERC20Balance = async (contract: string, address: string) => {
  return 0;
};

export default getbalance;
