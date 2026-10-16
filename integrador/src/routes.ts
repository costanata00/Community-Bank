import { Router } from "express";
import { accountController } from "./controllers/accountController.js";
import { SolidarityCreditController } from "./credit/adapters/in/solidarityCreditController.js";
import { CreditRequestRepositoryImpl } from "./credit/adapters/out/creditRequestRepositoryImpl.js";
import { CreateSolidarityCreditUseCase } from "./credit/application/createSolidarityCreditUseCase.js";

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
const solidarityCreditController = new SolidarityCreditController(
  new CreateSolidarityCreditUseCase(new CreditRequestRepositoryImpl())
);
routes.post("/credit/solidarity", solidarityCreditController.create);
