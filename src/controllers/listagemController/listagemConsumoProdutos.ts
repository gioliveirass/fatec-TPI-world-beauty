import Cliente from "../../models/cliente";
import Listagem from "../listagem";
import Produto from "../../models/produto";
import Servico from "../../models/servico";

class ListagemConsumoProdutos extends Listagem {
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
    console.log(
      "\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
    );
    console.log("Listagem de produtos/serviços mais consumidos");
    console.log(
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
    );

    let todosOsProdutos: number[] = [];
    let todosOsServicos: number[] = [];

    this.clientes.forEach((cliente) => {
      // Colocando tudo em um array
      cliente.getProdutosConsumidos.forEach((produto) => {
        todosOsProdutos.push(produto);
      });
      cliente.getServicosConsumidos.forEach((servico) => {
        todosOsServicos.push(servico);
      });
    });

    // Contando quantas vezes cada um aparece
    let quantidadeProdutos = todosOsProdutos.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          tipo: "produto",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    let quantidadeServico = todosOsServicos.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          tipo: "servico",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    // Ordenando tudo
    let tudoQueFoiConsumido: any[] = [];
    let tudoOrdenado: any[] = [];

    Object.keys(quantidadeProdutos).forEach((key) => {
      Object.values(quantidadeProdutos[key]).forEach((valor) => {
        tudoQueFoiConsumido.push(quantidadeProdutos[key]);
      });
    });

    Object.keys(quantidadeServico).forEach((key) => {
      Object.values(quantidadeServico[key]).forEach((valor) => {
        tudoQueFoiConsumido.push(quantidadeServico[key]);
      });
    });

    tudoOrdenado = tudoQueFoiConsumido.sort((a, b) => {
      return b.quantidade - a.quantidade;
    });

    let top10 = tudoOrdenado.slice(0, 10);

    // Imprimindo na tela
    top10.forEach((itemConsumido) => {
      if (itemConsumido.tipo === "produto") {
        this.produtos.forEach((produto) => {
          if (itemConsumido.id === produto.getId) {
            console.log("Tipo de item consumido: Produto");
            console.log(
              "Total de vezes que o item foi consumido: " +
                itemConsumido.quantidade
            );
            console.log("ID do item: " + produto.getId);
            console.log("Nome do item: " + produto.nome);
            console.log("Preço do item: " + produto.preco + "\n");
          }
        });
      } else {
        this.servicos.forEach((servico) => {
          if (itemConsumido.id === servico.getId) {
            console.log("Tipo de item consumido: Serviço");
            console.log(
              "Total de vezes que o item foi consumido: " +
                itemConsumido.quantidade
            );
            console.log("ID do item: " + servico.getId);
            console.log("Nome do item: " + servico.nome);
            console.log("Preço do item: " + servico.preco + "\n");
          }
        });
      }
    });

    console.log("\n✨ Listagem concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ListagemConsumoProdutos;
