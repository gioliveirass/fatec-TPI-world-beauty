import Atualizar from "../atualizar";
import Input from "../../utils/input";
import Cliente from "../../models/cliente";

class AtualizarCliente extends Atualizar {
  private clientes: Array<Cliente>;
  private input: Input;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.input = new Input();
  }

  public atualizar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da atualização de cliente");
    console.log("- - - - - - - - - - - - - - - - \n");

    let cpfCliente = this.input.receberNumero(
      "Número do CPF do cliente que você deseja atualizar: "
    );

    this.clientes.forEach((cliente) => {
      if (cpfCliente == cliente.getCpf.getValor) {
        /* ---------------------------- */
        /* Atualizando nome do cliente */
        /* --------------------------- */

        console.log("\nDeseja atualizar o nome do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarNome = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeNovo = this.input.receberTexto(
            "Digite o nome novo do cliente: "
          );
          cliente.setNome(nomeNovo);
        } else {
          console.log("Ok");
        }

        /* ---------------------------------- */
        /* Atualizando nome social do cliente */
        /* ---------------------------------- */

        console.log("\nDeseja atualizar o nome social do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarNomeSocial = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeSocialNovo = this.input.receberTexto(
            "Digite o nome social novo do cliente: "
          );
          cliente.setNomeSocial(nomeSocialNovo);
        } else {
          console.log("Ok");
        }

        /* ----------------------------- */
        /* Atualizando gênero do cliente */
        /* ----------------------------- */

        console.log("\nDeseja atualizar o gênero do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarGenero = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarGenero == 1) {
          console.log("\nSelecione uma opção: ");
          console.log("       1 - Feminino");
          console.log("       2 - Masculino");
          console.log("       3 - Outro/confidencial\n");
          let generoNovo = this.input.receberNumero(
            "Digite o número correspondente: "
          );
          cliente.setGenero(generoNovo);
        } else {
          console.log("Ok");
        }

        console.log("\n✨ Atualização concluída\n");
      }
    });

    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default AtualizarCliente;
