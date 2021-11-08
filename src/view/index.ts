import Input from "../utils/input";
import Empresa from "../models/empresa";

import CadastroCliente from "../controllers/clienteController/cadastroCliente";
import CadastroProduto from "../controllers/produtoController/cadastroProduto";

import ListagemProdutos from "../controllers/produtoController/listagemProdutos";

import exibirMenuCliente from "./menus/menuCliente";
import exibirMenuProduto from "./menus/menuProduto";
import exibirInicio from "./menus/inicio";

console.log("█░░────────────────────────────────────────────────────────░░█");
console.log("█░░ Boas vindas à agenda de clientes do Grupo World Beauty ░░█");
console.log("█░░────────────────────────────────────────────────────────░░█\n");

let empresa = new Empresa();
let programaEmExecucao = true;

while (programaEmExecucao) {
  /* Ínico */
  exibirInicio();
  let input = new Input();
  let menuEscolhido = input.receberNumero(
    "\nDigite o número correspondente à ação desejada: "
  );

  switch (menuEscolhido) {
    /* --------------- */
    /* Menu de cliente */
    /* --------------- */

    case 1:
      exibirMenuCliente();
      let opcaoMenuCliente = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuCliente) {
        case 1 /* Cadastro */:
          let cadastroCliente = new CadastroCliente(empresa.getClientes);
          cadastroCliente.cadastrar();
          break;

        case 0 /* Voltar ao ínicio */:
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n🏠 De volta ao ínicio 🏠\n");
          break;
      }
      break;

    /* ---------------- */
    /* Menu de Produtos */
    /* ---------------- */

    case 2:
      exibirMenuProduto();
      let opcaoMenuProduto = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuProduto) {
        case 1 /* Cadastro */:
          let cadastroProduto = new CadastroProduto(empresa.getProdutos);
          cadastroProduto.cadastrar();
          break;

        case 2 /* Listagem */:
          let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
          listagemProdutos.listar();
          break;

        case 0 /* Voltar ao ínicio */:
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n🏠 De volta ao ínicio 🏠\n");
          break;
      }
      break;

    /* ------------------- */
    /* Encerra a aplicação */
    /* ------------------- */

    case 0:
      programaEmExecucao = false;
      console.log("\nEncerrando...\n");
      console.log(
        "█░░────────────────────────────────────────────────────────░░█"
      );
      console.log(
        "█░░                        Até mais                        ░░█"
      );
      console.log(
        "█░░────────────────────────────────────────────────────────░░█\n"
      );
      break;

    default:
      console.log("\n▲ Operação não entendida ▲\n");
  }
}
