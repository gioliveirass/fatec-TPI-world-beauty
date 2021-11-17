import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

class Cliente {
  public nome: string;
  public nomeSocial: string;
  public genero: number;
  private cpf: CPF;
  private rgs: Array<RG>;
  private telefones: Array<Telefone>;
  private produtosConsumidos: number[];
  private servicosConsumidos: number[];
  private dataCadastro: Date;

  constructor(
    nome: string,
    nomeSocial: string,
    genero: number,
    cpf: CPF,
    rgs: Array<RG>,
    telefones: Array<Telefone>,
    produtosConsumidos: number[],
    servicosConsumidos: number[]
  ) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.genero = genero;
    this.cpf = cpf;
    this.rgs = rgs;
    this.telefones = telefones;
    this.produtosConsumidos = produtosConsumidos;
    this.servicosConsumidos = servicosConsumidos;
    this.dataCadastro = new Date();
  }

  // Getters

  public get getCpf(): CPF {
    return this.cpf;
  }

  public get getRgs(): Array<RG> {
    return this.rgs;
  }

  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }

  public get getTelefones(): Array<Telefone> {
    return this.telefones;
  }

  public get getProdutosConsumidos(): number[] {
    return this.produtosConsumidos;
  }

  public get getServicosConsumidos(): number[] {
    return this.servicosConsumidos;
  }

  // Setters

  public setNome(nome: string) {
    this.nome = nome;
  }

  public setNomeSocial(nomeSocial: string) {
    this.nomeSocial = nomeSocial;
  }

  public setGenero(genero: number) {
    this.genero = genero;
  }

  public setRgs(rgs: Array<RG>) {
    this.rgs = rgs;
  }

  public setTelefones(telefones: Array<Telefone>) {
    this.telefones = telefones;
  }

  public setProdutosConsumidos(produtosConsumidos: number[]) {
    this.produtosConsumidos = produtosConsumidos;
  }

  public setServicosConsumidos(servicosConsumidos: number[]) {
    this.servicosConsumidos = servicosConsumidos;
  }
}

export default Cliente;
