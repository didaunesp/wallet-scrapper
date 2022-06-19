import { getbalance, getERC20Balance } from "./getBalance";
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
  const web3TokenBalances = await getWeb3TokenBalances(address);
  return [bnbBalance, ...web3TokenBalances];
};

const getBnbBalance = async (address: string): Promise<Balance> => {
  const amount = await getbalance(address);
  return {
    token: "bnb",
    amount: amount,
  };
};

const getWeb3TokenBalances = async (address: string): Promise<Balance[]> => {
  return Promise.all(
    tokenList.map(async (token): Promise<Balance> => {
      try {
        return {
          token: token.name,
          amount: await getERC20Balance(token.contract, address),
        };
      } catch (error) {
        console.log(error);
        console.log(
          `error in obtaining ${token.name} balance for address ${address}`
        );
        return {
          token: token.name,
          amount: 0,
        };
      }
    })
  );
};

export { getBalances, Balance };
