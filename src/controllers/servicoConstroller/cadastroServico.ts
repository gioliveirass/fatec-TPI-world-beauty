import Cadastro from "../cadastro";
import Input from "../../utils/input";
import Servico from "../../models/servico";

class CadastroServico extends Cadastro {
  private servicos: Array<Servico>;
  private input: Input;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.input = new Input();
  }

  public cadastrar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início do cadastro de serviços");
    console.log("- - - - - - - - - - - - - - - - \n");

    let nomeServico = this.input.receberTexto("Nome do serviço: ");
    let idServico = this.input.receberNumero("ID do serviço: ");
    let precoServico = this.input.receberNumero("Preço do serviço: ");

    let servico = new Servico(nomeServico, idServico, precoServico);
    this.servicos.push(servico);

    console.log("\n✨ Cadastro concluído\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default CadastroServico;
