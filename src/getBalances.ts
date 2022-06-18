import getProvider from "./getProvider";

const getbalances = async (address: string) => {
  const provider = await getProvider();
  const balances = await provider.getBalance(
    "0xa9FDeb97d2ACad58eC48d0406Ed2Eb6bB96CfDB5"
  );
  return balances;
};

export default getbalances;
