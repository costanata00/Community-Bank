import { CreditRequest } from "../../domain/creditRequest.js";

export interface CreateSolidarityCreditInput {
  accountId: string;
  nomeEmpreendimento: string;
  responsavel: string;
  valor: number;
}

export interface CreateSolidarityCreditApplication {
  execute(input: CreateSolidarityCreditInput): CreditRequest;
}
