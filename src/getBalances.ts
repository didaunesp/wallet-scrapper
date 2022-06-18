import getbalance from "./getBalance";
import getProvider from "./getProvider";

type Balance = {
  token: string;
  amount: any;
};

const tokenList = [
  {
    name: "btcb",
    contract: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  },
  {
    name: "busd",
    contract: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  },
];

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
