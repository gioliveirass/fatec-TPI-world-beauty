import Cadastro from "../cadastro";
import Input from "../../utils/input";
import Cliente from "../../models/cliente";
import CPF from "../../models/cpf";
import RG from "../../models/rg";
import Telefone from "../../models/telefone";

class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private input: Input;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.input = new Input();
  }

  public cadastrar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início do cadastro de cliente");
    console.log("- - - - - - - - - - - - - - - - \n");

    let nome = this.input.receberTexto("Nome do cliente: ");
    let nomeSocial = this.input.receberTexto("Nome social do cliente: ");

    /* ---------------------------- */
    /* Solicitando e formatando CPF */
    /* ---------------------------- */

    console.log("\nCadastrando CPF do cliente...");
    let valor = this.input.receberTexto("Número do CPF: ");
    let dataCPF = this.input.receberTexto(
      "Data de emissão do CPF (padrão dd/mm/yyyy): "
    );

    let partesDataCPF = dataCPF.split("/");

    let ano = new Number(partesDataCPF[2].valueOf()).valueOf();
    let mes = new Number(partesDataCPF[1].valueOf()).valueOf();
    let dia = new Number(partesDataCPF[0].valueOf()).valueOf();
    let dataEmissaoCPF = new Date(ano, mes, dia);

    let cpf = new CPF(valor, dataEmissaoCPF);

    /* --------------- */
    /* Solicitando RGs */
    /* --------------- */

    console.log("\nCadastrando RG(s) do cliente...");
    let rgs: Array<RG> = [];

    let quantidadeRGs: number = this.input.receberNumero(
      "Informe a quantidade de RGs a serem cadastrados: : "
    );

    while (quantidadeRGs <= 0) {
      quantidadeRGs = this.input.receberNumero(
        "Digite uma quantidade válida (no mínimo 1): "
      );
    }

    let rgAtual = 1; // Contador de RGs

    while (rgAtual <= quantidadeRGs) {
      console.log("\nCadastrando o " + rgAtual + " RG...");
      let numeroRG = this.input.receberNumero("Número do RG: ");
      let dataRG = this.input.receberTexto(
        "Data de emissão do RG (padrão dd/mm/yyyy): "
      );

      let partesDataRG = dataRG.split("/");

      let ano = new Number(partesDataRG[2].valueOf()).valueOf();
      let mes = new Number(partesDataRG[1].valueOf()).valueOf();
      let dia = new Number(partesDataRG[0].valueOf()).valueOf();
      let dataEmissaoRG = new Date(ano, mes, dia);

      rgs.push(new RG(numeroRG, dataEmissaoRG));

      rgAtual = rgAtual + 1;
    }

    /* --------------------------------- */
    /* Solicitando e formatando Telefone */
    /* --------------------------------- */

    console.log("\nCadastrando telefone(s) do cliente...");
    let telefones: Array<Telefone> = [];

    let quantidadeTelefones: number = this.input.receberNumero(
      "Quantos telefones serão cadastrados (de 1 a 3): "
    );

    while (quantidadeTelefones > 3 || quantidadeTelefones < 1) {
      quantidadeTelefones = this.input.receberNumero(
        "Digite uma quantidade válida (de 1 a 3): "
      );
    }

    let telefoneAtual = 1; // Contador de telefones

    while (telefoneAtual <= quantidadeTelefones) {
      console.log("\nCadastrando o " + telefoneAtual + " telefone...");
      let dddTelefone = this.input.receberNumero("DDD do telefone: ");
      let numeroTelefone = this.input.receberNumero("Número do telefone: ");
      telefones.push(new Telefone(dddTelefone, numeroTelefone));

      telefoneAtual = telefoneAtual + 1;
    }

    /* ------------------- */
    /* Concluíndo cadastro */
    /* --------------------*/

    let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones);
    this.clientes.push(cliente);

    console.log("\n✨ Cadastro concluído\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default CadastroCliente;
