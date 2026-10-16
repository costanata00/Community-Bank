import { SolidarityEnterprise } from "./solidarityEnterprise.js";

export class CreditRequest {
  constructor(
    public readonly id: string,
    public readonly accountId: string,
    public readonly empreendimento: SolidarityEnterprise,
    public readonly valor: number,
    public readonly status: string
  ) {
    if (!accountId) {
      throw new Error("accountId é obrigatório");
    }
    if (typeof valor !== "number" || valor <= 0) {
      throw new Error("valor deve ser maior que zero");
    }
  }
}
