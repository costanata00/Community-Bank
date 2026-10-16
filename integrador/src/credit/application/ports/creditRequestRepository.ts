import { CreditRequest } from "../../domain/creditRequest.js";

export interface CreditRequestRepository {
  save(request: CreditRequest): void;
}
