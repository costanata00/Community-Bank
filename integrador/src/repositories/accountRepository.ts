import { Account } from "../models/account.js";

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

export const accountRepository = {
  findAll(): Account[] {
    return accounts;
  },

  findById(id: string): Account | undefined {
    return accounts.find((account) => account.id === id);
  },

  create(account: Account): Account {
    accounts.push(account);
    return account;
  },

  update(account: Account): Account {
    const index = accounts.findIndex((item) => item.id === account.id);
    accounts[index] = account;
    return account;
  }
};
