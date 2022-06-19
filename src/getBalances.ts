import { nativeBalance, ERC20Balance } from "./provider";
import tokenList from "./tokenList";
import { Token, Balance } from "./types";

const getBalances = async (address: string): Promise<Balance[]> => {
  const bnbBalance = await getBnbBalance(address);
  const web3TokenBalances = await getWeb3TokenBalances(address);
  return [bnbBalance, ...web3TokenBalances];
};

const getBnbBalance = async (address: string): Promise<Balance> => {
  const amount = await nativeBalance(address);
  return {
    token: "bnb",
    amount: amount,
  };
};

const getWeb3TokenBalances = async (address: string): Promise<Balance[]> => {
  return Promise.all(
    tokenList.map((token) => getWeb3TokenBalance(token, address))
  );
};

const getWeb3TokenBalance = async (
  token: Token,
  address: string
): Promise<Balance> => {
  try {
    return {
      token: token.name,
      amount: await ERC20Balance(token.contract, address),
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
};

export { getBalances, Balance };
