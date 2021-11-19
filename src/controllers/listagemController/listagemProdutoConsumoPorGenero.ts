import Cliente from "../../models/cliente";
import Listagem from "../listagem";
import Produto from "../../models/produto";
import Servico from "../../models/servico";

class ListagemConsumoProdutosPorGenero extends Listagem {
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

    // Separando consumo de tudo
    let produtosFeminino: number[] = [];
    let produtosMasculino: number[] = [];
    let produtosOutro: number[] = [];
    let servicosFeminino: number[] = [];
    let servicosMasculino: number[] = [];
    let servicosOutro: number[] = [];

    this.clientes.forEach((cliente) => {
      // Colocando tudo em um array
      switch (cliente.genero) {
        case 1:
          cliente.getProdutosConsumidos.forEach((produto) => {
            produtosFeminino.push(produto);
          });
          cliente.getServicosConsumidos.forEach((servico) => {
            servicosFeminino.push(servico);
          });
          break;

        case 2:
          cliente.getProdutosConsumidos.forEach((produto) => {
            produtosMasculino.push(produto);
          });
          cliente.getServicosConsumidos.forEach((servico) => {
            servicosMasculino.push(servico);
          });
          break;

        case 3:
          cliente.getProdutosConsumidos.forEach((produto) => {
            produtosOutro.push(produto);
          });
          cliente.getServicosConsumidos.forEach((servico) => {
            servicosOutro.push(servico);
          });
          break;
      }
    });

    // Contando quantas vezes cada um aparece
    let quantidadeProdutosFeminino = produtosFeminino.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          genero: "Feminino",
          tipo: "produto",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    let quantidadeServicosFeminino = servicosFeminino.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          genero: "Feminino",
          tipo: "servico",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    let quantidadeProdutosMasculino = produtosMasculino.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          genero: "Masculino",
          tipo: "servico",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    let quantidadeServicosMasculino = servicosMasculino.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          genero: "Masculino",
          tipo: "servico",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    let quantidadeProdutosOutro = produtosOutro.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          genero: "Outros/Confidencial",
          tipo: "servico",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    let quantidadeServicosOutro = servicosOutro.reduce((acc, val) => {
      if (!acc[val])
        acc[val] = {
          genero: "Outros/Confidencial",
          tipo: "servico",
          id: val,
          quantidade: 1,
        };
      else acc[val]["quantidade"]++;
      return acc;
    }, {});

    // Ordenando tudo
    let tudoQueFoiConsumidoFeminino: any[] = [];
    let tudoQueFoiConsumidoMasculino: any[] = [];
    let tudoQueFoiConsumidoOutro: any[] = [];

    Object.keys(quantidadeProdutosFeminino).forEach((key) => {
      Object.values(quantidadeProdutosFeminino[key]).forEach((valor) => {
        tudoQueFoiConsumidoFeminino.push(quantidadeProdutosFeminino[key]);
      });
    });

    Object.keys(quantidadeServicosFeminino).forEach((key) => {
      Object.values(quantidadeServicosFeminino[key]).forEach((valor) => {
        tudoQueFoiConsumidoFeminino.push(quantidadeServicosFeminino[key]);
      });
    });

    Object.keys(quantidadeProdutosMasculino).forEach((key) => {
      Object.values(quantidadeProdutosMasculino[key]).forEach((valor) => {
        tudoQueFoiConsumidoMasculino.push(quantidadeProdutosMasculino[key]);
      });
    });

    Object.keys(quantidadeServicosMasculino).forEach((key) => {
      Object.values(quantidadeServicosMasculino[key]).forEach((valor) => {
        tudoQueFoiConsumidoMasculino.push(quantidadeServicosMasculino[key]);
      });
    });

    Object.keys(quantidadeProdutosOutro).forEach((key) => {
      Object.values(quantidadeProdutosOutro[key]).forEach((valor) => {
        tudoQueFoiConsumidoOutro.push(quantidadeProdutosOutro[key]);
      });
    });

    Object.keys(quantidadeServicosOutro).forEach((key) => {
      Object.values(quantidadeServicosOutro[key]).forEach((valor) => {
        tudoQueFoiConsumidoOutro.push(quantidadeServicosOutro[key]);
      });
    });

    let tudoOrdenadoFeminino: any[] = [];
    let tudoOrdenadoMasculino: any[] = [];
    let tudoOrdenadoOutro: any[] = [];

    tudoOrdenadoFeminino = tudoQueFoiConsumidoFeminino.sort((a, b) => {
      return b.quantidade - a.quantidade;
    });

    tudoOrdenadoMasculino = tudoQueFoiConsumidoMasculino.sort((a, b) => {
      return b.quantidade - a.quantidade;
    });

    tudoOrdenadoOutro = tudoQueFoiConsumidoOutro.sort((a, b) => {
      return b.quantidade - a.quantidade;
    });

    let top10Feminino = tudoOrdenadoFeminino.slice(0, 10);
    let top10Masculino = tudoOrdenadoMasculino.slice(0, 10);
    let top10Outro = tudoOrdenadoOutro.slice(0, 10);

    // Imprimindo na tela
    console.log("---------------------------------------------------------");
    console.log("Produtos e Serviços mais consumidos pelo público feminino\n");
    top10Feminino.forEach((itemConsumido) => {
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

    console.log("---------------------------------------------------------");
    console.log("Produtos e Serviços mais consumidos pelo público masculino\n");
    top10Masculino.forEach((itemConsumido) => {
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

    console.log("---------------------------------------------------------");
    console.log(
      "Produtos e Serviços mais consumidos por pessoa de outro gênero ou com gênero confidencial\n"
    );
    top10Outro.forEach((itemConsumido) => {
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

export default ListagemConsumoProdutosPorGenero;
