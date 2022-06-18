import { Router } from "express";
import getBalance from "./getBalance";
//import getBalances from "./getBalances";

const routes = Router();

routes.get("/get-balance", (req, res) => getBalance(req, res));

//routes.get("/get-balances", (req, res) => getBalances(req, res));

export default routes;
