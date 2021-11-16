import Input from "../utils/input";
import Empresa from "../models/empresa";

import InsercaoProdutosIniciais from "../utils/insercaoProdutosIniciais";

import CadastroCliente from "../controllers/clienteController/cadastroCliente";
import CadastroProduto from "../controllers/produtoController/cadastroProduto";
import CadastroServico from "../controllers/servicoConstroller/cadastroServico";

import ListagemProdutos from "../controllers/produtoController/listagemProdutos";

import exibirMenuCliente from "./menus/menuCliente";
import exibirMenuProduto from "./menus/menuProduto";
import exibirInicio from "./menus/inicio";
import exibirMenuServico from "./menus/menuServico";

console.log("█░░────────────────────────────────────────────────────────░░█");
console.log("█░░ Boas vindas à agenda de clientes do Grupo World Beauty ░░█");
console.log("█░░────────────────────────────────────────────────────────░░█\n");

let empresa = new Empresa();
let programaEmExecucao = true;

// Inserindo valores iniciais
let produtosIniciais = new InsercaoProdutosIniciais(empresa.getProdutos);
produtosIniciais.cadastrar();

while (programaEmExecucao) {
  /* Ínico */
  exibirInicio();
  let input = new Input();
  let menuEscolhido = input.receberNumero(
    "\nDigite o número correspondente à ação desejada: "
  );

  switch (menuEscolhido) {
    /* ---------------- */
    /* Menu de Cliente */
    /* ---------------- */

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

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }
      break;

    /* --------------- */
    /* Menu de Produto */
    /* --------------- */

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

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }
      break;

    /* ---------------- */
    /* Menu de Serviço */
    /* ---------------- */

    case 3:
      exibirMenuServico();
      let opcaoMenuServico = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuServico) {
        case 1 /* Cadastro */:
          let cadastroServico = new CadastroServico(empresa.getServicos);
          cadastroServico.cadastrar();
          break;

        case 0 /* Voltar ao ínicio */:
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n🏠 De volta ao ínicio 🏠\n");
          break;

        default:
          console.log("\n▲ Operação não entendida ▲\n");
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
