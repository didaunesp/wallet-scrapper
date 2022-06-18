import { Router } from "express";
import getBalance from "./getBalance";
import getBalances from "./getBalances";

const routes = Router();

routes.get("/get-balances", async (req, res) => {
  const { address } = req.body;
  const balances = await getBalances(address);
  res.status(200).json(balances);
});

export default routes;
