import { BigNumber } from "ethers";
import getbalance from "./getBalance";
import getProvider from "./getProvider";

type Balance = {
  token: string;
  amount: any;
};

const getBalances = async (address: string): Promise<Balance[]> => {
  const provider = await getProvider();
  const bnbBalance = await getBnbBalance(address);
  return [bnbBalance];
};

const getBnbBalance = async (address: string): Promise<Balance> => {
  const amount = await getbalance(address);
  console.log("amount :>> ", amount);
  return {
    token: "bnb",
    amount: amount,
  };
};

export { getBalances, Balance };
