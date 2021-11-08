class RG {
  private valor: number;
  private dataEmissao: Date;

  constructor(valor: number, dataEmissao: Date) {
    this.valor = valor;
    this.dataEmissao = dataEmissao;
  }

  public get getValor(): number {
    return this.valor;
  }

  public get getDataEmissao(): Date {
    return this.dataEmissao;
  }
}

export default RG;
