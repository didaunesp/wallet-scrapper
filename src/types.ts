interface Token {
  name: string;
  contract: string;
}

type Balance = {
  token: string;
  amount: any;
};

interface IProvider {
  nativeBalance: (address: string) => Promise<string>;
  ERC20Balance: (contract: string, address: string) => Promise<string>;
}

export { Token, Balance, IProvider };
