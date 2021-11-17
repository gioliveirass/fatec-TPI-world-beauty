import Cliente from "../../models/cliente";
import Listagem from "../listagem";
import Produto from "../../models/produto";
import Servico from "../../models/servico";

class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
  ) {
    super();
    this.clientes = clientes;
    this.produtos = produtos;
    this.servicos = servicos;
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
      console.log("      - Número do CPF: " + cliente.getCpf.getValor);
      console.log(
        "        Data de emissão do CPF: " + cliente.getCpf.getDataEmissao
      );

      /* ------------------------------ */
      /* Imprimindo RGs do cliente */
      /* ------------------------------ */

      cliente.getRgs.forEach((RG) => {
        console.log("Dados do(s) RG(s) do cliente");
        console.log("      - Número do RG: " + RG.getValor);
        console.log("        Data de emissão do RG: " + RG.getDataEmissao);
      });

      /* ------------------------------- */
      /* Imprimindo telefones do cliente */
      /* ------------------------------- */

      cliente.getTelefones.forEach((telefone) => {
        console.log("Dados do(s) telefone(s) do cliente");
        console.log("      - DDD do telefone: " + telefone.getDdd);
        console.log("        Número do telefone: " + telefone.getNumero);
      });

      /* ------------------------------------------- */
      /* Imprimindo produtos consumidos pelo cliente */
      /* ------------------------------------------- */

      console.log("Dados do(s) produto(s) consumidos pelo cliente");
      cliente.getProdutosConsumidos.forEach((produtoConsumido) => {
        this.produtos.forEach((produtoCadastrado) => {
          if (produtoConsumido == produtoCadastrado.getId) {
            console.log("      - Nome do produto: " + produtoCadastrado.nome);
            console.log(
              "        Preço do produto: R$" + produtoCadastrado.preco + ",00"
            );
          }
        });
      });

      /* ------------------------------------------- */
      /* Imprimindo serviços consumidos pelo cliente */
      /* ------------------------------------------- */

      console.log("Dados do(s) serviço(s) consumidos pelo cliente");
      cliente.getServicosConsumidos.forEach((servicosConsumidos) => {
        this.servicos.forEach((servicosCadastrados) => {
          if (servicosConsumidos == servicosCadastrados.getId) {
            console.log("      - Nome do serviço: " + servicosCadastrados.nome);
            console.log(
              "        Preço do serviço: R$" + servicosCadastrados.preco + ",00"
            );
          }
        });
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
