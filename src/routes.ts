import { Request, Response, Router } from "express";
import { getBalances } from "./getBalances";

const routes = Router();

routes.get(
  "/get-balances/:address",
  async (req: Request, res: Response): Promise<void> => {
    const address = req.params.address;
    const balances = await getBalances(address);
    res.status(200).json(balances);
  }
);

export default routes;
