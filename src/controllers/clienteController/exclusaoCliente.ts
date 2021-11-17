import Exclusao from "../exclusao";
import Input from "../../utils/input";
import Cliente from "../../models/cliente";
import Empresa from "../../models/empresa";

class ExclusaoCliente extends Exclusao {
  private empresa: Empresa;
  private input: Input;

  constructor(empresa: Empresa) {
    super();
    this.empresa = empresa;
    this.input = new Input();
  }

  public excluir(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da exclusão de cliente");
    console.log("- - - - - - - - - - - - - - - - \n");

    let cpfClienteExcluido = this.input.receberNumero(
      "Número do CPF do cliente que deseja excluir o cadastro: "
    );

    let clientesAtualizados: Cliente[] = [];

    this.empresa.getClientes.map((cliente) => {
      if (cliente.getCpf.getValor !== cpfClienteExcluido) {
        clientesAtualizados.push(cliente);
      }
    });

    this.empresa.setClientes(clientesAtualizados);

    console.log("\n✨ Exclusão concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ExclusaoCliente;
