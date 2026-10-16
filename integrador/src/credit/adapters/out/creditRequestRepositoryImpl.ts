import { DatabaseSync } from "node:sqlite";
import { CreditRequestRepository } from "../../application/ports/creditRequestRepository.js";
import { CreditRequest } from "../../domain/creditRequest.js";

const db = new DatabaseSync("database.sqlite");

db.exec(`
  CREATE TABLE IF NOT EXISTS credit_requests (
    id TEXT PRIMARY KEY,
    account_id TEXT NOT NULL,
    nome_empreendimento TEXT NOT NULL,
    responsavel TEXT NOT NULL,
    valor REAL NOT NULL,
    status TEXT NOT NULL
  )
`);

export class CreditRequestRepositoryImpl implements CreditRequestRepository {
  save(request: CreditRequest): void {
    db.prepare("INSERT INTO credit_requests VALUES (?, ?, ?, ?, ?, ?)").run(
      request.id,
      request.accountId,
      request.empreendimento.nome,
      request.empreendimento.responsavel,
      request.valor,
      request.status
    );
  }
}
