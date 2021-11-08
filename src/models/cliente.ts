import CPF from "./cpf";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

class Cliente {
  public nome: string;
  public nomeSocial: string;
  private cpf: CPF;
  private rgs: Array<RG>;
  private telefones: Array<Telefone>;
  private produtosConsumidos: Array<Produto>;
  private servicosConsumidos: Array<Servico>;
  private dataCadastro: Date;

  constructor(
    nome: string,
    nomeSocial: string,
    cpf: CPF,
    rg: Array<RG>,
    telefones: Array<Telefone>
  ) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.cpf = cpf;
    this.rgs = rg;
    this.telefones = telefones;
    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
    this.dataCadastro = new Date();
  }

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

  public get getProdutosConsumidos(): Array<Produto> {
    return this.produtosConsumidos;
  }

  public get getServicosConsumidos(): Array<Servico> {
    return this.servicosConsumidos;
  }
}

export default Cliente;
