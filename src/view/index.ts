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

import AtualizacaoProduto from "../controllers/produtoController/atualizacaoProduto";
import AtualizacaoServico from "../controllers/servicoConstroller/atualizacaoServico";
import AtualizacaoCliente from "../controllers/clienteController/atualizacaoCliente";

import ExclusaoProduto from "../controllers/produtoController/exclusaoProduto";
import ExclusaoServico from "../controllers/servicoConstroller/exclusaoServico";
import ExclusaoCliente from "../controllers/clienteController/exclusaoCliente";

import ListagemConsumoEmQuantidade from "../controllers/listagemController/listagemConsumeEmQuantidade";
import ListagemClientesPorGenero from "../controllers/listagemController/listagemClientesPorGenero";
import ListagemMenorConsumoEmQuantidade from "../controllers/listagemController/listagemMenorConsumoEmQuantidade";

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

        case 3 /* Atualização */:
          let atualizacaoClientes = new AtualizacaoCliente(empresa.getClientes);
          atualizacaoClientes.atualizar();
          break;

        case 4 /* Exclusão */:
          let exclusaoClientes = new ExclusaoCliente(empresa);
          exclusaoClientes.excluir();
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
          let atualizacaoProdutos = new AtualizacaoProduto(empresa.getProdutos);
          atualizacaoProdutos.atualizar();
          break;

        case 4 /* Exclusão */:
          let exclusaoProdutos = new ExclusaoProduto(empresa);
          exclusaoProdutos.excluir();
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
          let atualizacaoServico = new AtualizacaoServico(empresa.getServicos);
          atualizacaoServico.atualizar();
          break;

        case 4 /* Exclusão */:
          let exclusaoServicos = new ExclusaoServico(empresa);
          exclusaoServicos.excluir();
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
        case 1 /* Listagem clientes que mais consumiram em quantidade */:
          let listagemConsumoEmQuantidade = new ListagemConsumoEmQuantidade(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemConsumoEmQuantidade.listar();
          break;

        case 2 /* Listagem de clientes por gênero */:
          let listagemClientesPorGenero = new ListagemClientesPorGenero(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemClientesPorGenero.listar();
          break;

        case 5 /* Listagem de clientes que menoos consumiram em quantidade */:
          let listagemMenorConsumoEmQuantidade =
            new ListagemMenorConsumoEmQuantidade(
              empresa.getClientes,
              empresa.getProdutos,
              empresa.getServicos
            );
          listagemMenorConsumoEmQuantidade.listar();
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
