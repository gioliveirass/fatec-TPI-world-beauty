class Produto {
  public nome: string;
  private id: number;
  public preco: number;

  constructor(nome: string, id: number, preco: number) {
    this.nome = nome;
    this.id = id;
    this.preco = preco;
  }

  // Getters

  public get getId(): number {
    return this.id;
  }

  // Setters

  public setNome(nome: string) {
    this.nome = nome;
  }

  public setPreco(preco: number) {
    this.preco = preco;
  }
}

export default Produto;
