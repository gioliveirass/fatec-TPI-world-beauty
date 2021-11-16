class Servico {
  public nome: string;
  private id: number;
  public preco: number;

  constructor(nome: string, id: number, preco: number) {
    this.nome = nome;
    this.id = id;
    this.preco = preco;
  }

  public get getId(): number {
    return this.id;
  }
}

export default Servico;
