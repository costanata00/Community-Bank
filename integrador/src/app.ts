import express from "express";
import { randomUUID } from "node:crypto";

export const app = express();
app.use(express.json());

interface Account {
  id: string;
  titular: string;
  cpf: string;
  saldo: number;
}

const accounts: Account[] = [
    {
      id: "1",
      titular: "Maria Silva",
      cpf: "123.456.789-01",
      saldo: 10000
    },
    {
      id: "2",
      titular: "João Souza",
      cpf: "123.456.789-02",
      saldo: 25000
    },
    {
      id: "3",
      titular: "Ana Costa",
      cpf: "123.456.789-03",
      saldo: 0
    }
  ];

app.get("/", (_request, response) => {
  return response.status(200).json({
    message: "Community Bank API"
  });
});

app.get("/health", (_request, response) => {
  return response.status(200).json({
    status: "ok"
  });
});

app.get("/accounts", (_request, response) => {
  return response.status(200).json(accounts);
});

app.post("/accounts", (request, response) => {
  const { titular, cpf } = request.body;
  if (!titular) {
    return response.status(400).json({
      message: "titular é obrigatorio"
    });
  }
  const account: Account = {
    id: randomUUID(),
    titular,
    cpf,
    saldo: 0
  };
  accounts.push(account);
  return response.status(201).json(account);
});