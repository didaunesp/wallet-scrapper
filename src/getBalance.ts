import { Request, Response } from "express";
import getProvider from "./getProvider";

const getbalance = async (req: Request, res: Response) => {
  const provider = await getProvider();
  const balance = await provider.getBalance(
    "0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5"
  );
  res.status(200).json(balance);
};

export default getbalance;
