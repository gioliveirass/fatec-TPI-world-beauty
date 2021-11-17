import Input from "../utils/input";
import Empresa from "../models/empresa";

import InsercaoProdutosIniciais from "../utils/insercaoProdutosIniciais";
import InsercaoServicosIniciais from "../utils/insercaoServicosIniciais";
import InsercaoClientesIniciais from "../utils/insercaoClientesIniciais";

import CadastroCliente from "../controllers/clienteController/cadastroCliente";
import CadastroProduto from "../controllers/produtoController/cadastroProduto";
import CadastroServico from "../controllers/servicoConstroller/cadastroServico";

import ListagemProdutos from "../controllers/produtoController/listagemProdutos";
import ListagemServicos from "../controllers/servicoConstroller/listagemServico";
import ListagemClientes from "../controllers/clienteController/listagemCliente";

import AtualizarProduto from "../controllers/produtoController/atualizacaoProduto";
import AtualizarServico from "../controllers/servicoConstroller/atualizacaoServico";

import exibirMenuCliente from "./menus/menuCliente";
import exibirMenuProduto from "./menus/menuProduto";
import exibirInicio from "./menus/inicio";
import exibirMenuServico from "./menus/menuServico";
import exibirMenuListagens from "./menus/menuListagens";

console.log("█░░────────────────────────────────────────────────────────░░█");
console.log("█░░ Boas vindas à agenda de clientes do Grupo World Beauty ░░█");
console.log("█░░────────────────────────────────────────────────────────░░█\n");

let empresa = new Empresa();
let programaEmExecucao = true;

// Inserindo valores iniciais
let produtosIniciais = new InsercaoProdutosIniciais(empresa.getProdutos);
produtosIniciais.cadastrar();

let servicosIniciais = new InsercaoServicosIniciais(empresa.getServicos);
servicosIniciais.cadastrar();

let clientesIniciais = new InsercaoClientesIniciais(empresa.getClientes);
clientesIniciais.cadastrar();

// Iniciando o programa
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

        case 2 /* Listagem */:
          let listagemClientes = new ListagemClientes(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemClientes.listar();
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

        case 3 /* Atualização */:
          let atualizarProdutos = new AtualizarProduto(empresa.getProdutos);
          atualizarProdutos.atualizar();
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

        case 2 /* Listagem */:
          let listagemServicos = new ListagemServicos(empresa.getServicos);
          listagemServicos.listar();
          break;

        case 3 /* Atualização */:
          let atualizarServico = new AtualizarServico(empresa.getServicos);
          atualizarServico.atualizar();
          break;

        case 0 /* Voltar ao ínicio */:
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n🏠 De volta ao ínicio 🏠\n");
          break;

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }
      break;

    /* ----------------- */
    /* Menu de Listagens */
    /* ----------------- */

    case 4:
      exibirMenuListagens();
      let opcaoMenuListagem = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuListagem) {
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
