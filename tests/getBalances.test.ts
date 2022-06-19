import { getBalances, Balance } from "../src/getBalances";

//mockar nativeBalances, ERC20Balances

jest.mock(
  "../src/provider.ts",
  jest.fn(() => ({
    nativeBalance: jest.fn().mockReturnValue("0.122217329"),
    ERC20Balance: jest.fn().mockReturnValue("1970.844009383260859695"),
  }))
);

describe("getBalances", () => {
  let balances: Balance[];

  beforeAll(async () => {
    balances = await getBalances("0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5");
  }, 30000);

  it("Should retrive native balance", async () => {
    const amount = balances.find((balance) => balance.token == "bnb")?.amount;
    expect(amount).toBe("0.122217329");
  }, 30000);

  it("Should retrieve busd  balance", async () => {
    const amount = balances.find((balance) => balance.token == "busd")?.amount;
    expect(amount).toBe("1970.844009383260859695");
  }, 30000);
});
