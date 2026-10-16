import { randomUUID } from "node:crypto";
import { CreditRequest } from "../domain/creditRequest.js";
import { SolidarityEnterprise } from "../domain/solidarityEnterprise.js";
import {
  CreateSolidarityCreditApplication,
  CreateSolidarityCreditInput
} from "./ports/createSolidarityCreditApplication.js";
import { CreditRequestRepository } from "./ports/creditRequestRepository.js";

export class CreateSolidarityCreditUseCase implements CreateSolidarityCreditApplication {
  constructor(private readonly repository: CreditRequestRepository) {}

  execute(input: CreateSolidarityCreditInput): CreditRequest {
    const empreendimento = new SolidarityEnterprise(input.nomeEmpreendimento, input.responsavel);
    const request = new CreditRequest(randomUUID(), input.accountId, empreendimento, input.valor, "em_analise");
    this.repository.save(request);
    return request;
  }
}
