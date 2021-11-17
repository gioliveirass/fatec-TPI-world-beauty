import Cliente from "../../models/cliente";
import Listagem from "../listagem";
import Produto from "../../models/produto";

class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log("\n- - - - - - - - - - - - - - - - - - - - - -");
    console.log("Lista das informações de todos os clientes");
    console.log("- - - - - - - - - - - - - - - - - - - - - -\n");

    this.clientes.forEach((cliente) => {
      console.log("Nome do cliente: " + cliente.nome);
      console.log("Nome do social do cliente: " + cliente.nomeSocial);

      /* ------------------------------ */
      /* Imprimindo genênero do cliente */
      /* ------------------------------ */

      switch (cliente.genero) {
        case 1 /* Cadastro */:
          console.log("Gênero do cliente: Feminino");
          break;

        case 2 /* Listagem */:
          console.log("Gênero do cliente: Masculino");
          break;

        case 3 /* Voltar ao ínicio */:
          console.log("Gênero do cliente: Outro/confidencial");
          break;
      }
      /* ------------------------------ */
      /* Imprimindo CPF do cliente */
      /* ------------------------------ */

      console.log("Dados do CPF do cliente");
      console.log("     Número do CPF: " + cliente.getCpf.getValor);
      console.log(
        "     Data de emissão do CPF anterior: " + cliente.getCpf.getDataEmissao
      );

      /* ------------------------------ */
      /* Imprimindo RGs do cliente */
      /* ------------------------------ */

      cliente.getRgs.forEach((RG) => {
        console.log("Dados do(s) RGs do cliente");
        console.log("      Número do RG: " + RG.getValor);
        console.log(
          "      Data de emissão do RG anterior: " + RG.getDataEmissao
        );
      });

      /* -------------------------------------- */
      /* Imprimindo data de cadastro do cliente */
      /* -------------------------------------- */

      console.log(
        "Data de cadastro do cliente: " + cliente.getDataCadastro + "\n"
      );
    });

    console.log("\n✨ Listagem concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ListagemClientes;
