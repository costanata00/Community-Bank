import { randomUUID } from "node:crypto";
import { Request, Response } from "express";
import { Account } from "../models/account.js";
import { accountRepository } from "../repositories/accountRepository.js";

export const accountController = {
  list(_request: Request, response: Response) {
    return response.status(200).json(accountRepository.findAll());
  },

  create(request: Request, response: Response) {
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
    return response.status(201).json(accountRepository.create(account));
  },

  // regra do depósito: o valor precisa ser maior que zero e a conta precisa existir
  deposit(request: Request, response: Response) {
    const id = String(request.params.id);
    const { valor } = request.body;

    if (typeof valor !== "number" || Number.isNaN(valor) || valor <= 0) {
      return response.status(400).json({
        message: "valor deve ser um número maior que zero"
      });
    }

    const account = accountRepository.findById(id);
    if (!account) {
      return response.status(404).json({
        message: "conta não encontrada"
      });
    }

    const updated = accountRepository.update({ ...account, saldo: account.saldo + valor });
    return response.status(200).json({
      message: "depósito realizado",
      account: updated
    });
  }
};
