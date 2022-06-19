import { getbalance, getERC20Balance } from "./provider";
import tokenList from "./tokenList";

type Balance = {
  token: string;
  amount: any;
};

const getBalances = async (address: string): Promise<Balance[]> => {
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
