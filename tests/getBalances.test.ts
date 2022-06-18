import { getBalances, Balance } from "../src/getBalances";

describe("getBalances", () => {
  let balances: Balance[];

  beforeAll(async () => {
    balances = await getBalances("0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5");
  });

  it("Should retrive bnb balance", async () => {
    const amount = balances.find((balance) => balance.token == "bnb")?.amount;
    expect(amount).toBe("0.125527944");
  });

  it("Should retrieve busd  balance", async () => {
    const amount = balances.find((balance) => balance.token == "busd")?.amount;
    expect(amount).toBe("0");
  });

  it("Should retrive btcb balance", async () => {
    const amount = balances.find((balance) => balance.token == "btcb")?.amount;
    expect(amount).toBe("0.06715");
  });

  it("Should retrive eth balance", async () => {
    const amount = balances.find((balance) => balance.token == "eth")?.amount;
    expect(amount).toBe("0.46513");
  });

  it("Should retrive link balance", async () => {
    const amount = balances.find((balance) => balance.token == "link")?.amount;
    expect(amount).toBe("20");
  });

  it("Should retrive dot balance", async () => {
    const amount = balances.find((balance) => balance.token == "dot")?.amount;
    expect(amount).toBe("30");
  });
});
