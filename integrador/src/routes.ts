import { Router } from "express";
import { accountController } from "./controllers/accountController.js";

export const routes = Router();

routes.get("/", (_request, response) => {
  return response.status(200).json({
    message: "Community Bank API"
  });
});

routes.get("/health", (_request, response) => {
  return response.status(200).json({
    status: "ok"
  });
});

routes.get("/accounts", accountController.list);
routes.post("/accounts", accountController.create);
routes.post("/accounts/:id/deposits", accountController.deposit);
