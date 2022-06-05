import { Router } from "express";
import nodeConnection from "./NodeConnection";

const routes = Router();

routes.post("/", (req, res) => {
  nodeConnection();
  res.status(200).json({ Hello: "world2" });
});

export default routes;
