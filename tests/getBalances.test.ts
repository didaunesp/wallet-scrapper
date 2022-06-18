import getBalances from "../src/getBalances";
import { idText } from "typescript";

describe("getBalances", () => {
  let balances;

  beforeAll(async () => {
    balances = await getBalances("0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5");
  });

  it("Should retrive bnb balance", async () => {
    expect(balances.bnb).toBe(0.125527944);
  });

  it("Should retrieve busd  balance", async () => {
    expect(balances.busd).toBe(0);
  });

  it("Should retrive btcb balance", async () => {
    expect(balances.btcb).toBe(0.06715);
  });

  it("Should retrive eth balance", async () => {
    expect(balances.eth).toBe(0.46513);
  });

  it("Should retrive link balance", async () => {
    expect(balances.link).toBe(20);
  });

  it("Should retrive dot balance", async () => {
    expect(balances.dot).toBe(30);
  });
});
