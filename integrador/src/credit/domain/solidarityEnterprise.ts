export class SolidarityEnterprise {
  constructor(
    public readonly nome: string,
    public readonly responsavel: string
  ) {
    if (!nome || !responsavel) {
      throw new Error("nome e responsavel do empreendimento são obrigatórios");
    }
  }
}
