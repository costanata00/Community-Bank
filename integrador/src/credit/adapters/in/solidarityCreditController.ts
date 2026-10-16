import { Request, Response } from "express";
import { CreateSolidarityCreditApplication } from "../../application/ports/createSolidarityCreditApplication.js";

export class SolidarityCreditController {
  constructor(private readonly application: CreateSolidarityCreditApplication) {}

  create = (request: Request, response: Response) => {
    try {
      const credit = this.application.execute(request.body);
      return response.status(201).json(credit);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  };
}
