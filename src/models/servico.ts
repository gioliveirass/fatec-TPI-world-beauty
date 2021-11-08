class Servico {
  public nome: string;
  private id: number;

  constructor(nome: string, id: number) {
    this.nome = nome;
    this.id = id;
  }

  public get getId(): number {
    return this.id;
  }
}

export default Servico;
