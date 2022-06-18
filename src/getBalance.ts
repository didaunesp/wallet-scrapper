import { Request, Response } from "express";
import getProvider from "./getProvider";

const getbalance = async (address: string) => {
  const provider = await getProvider();
  const balance = await provider.getBalance(
    "0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5"
  );
  console.log(balance);
  return balance;
};

export default getbalance;
