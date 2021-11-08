import Produto from "../../models/produto";
import Listagem from "../listagem";

class ListagemProdutos extends Listagem {
  private produtos: Array<Produto>;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
  }

  public listar(): void {
    console.log("\n- - - - - - - - - - - - - - - - - - - - - -");
    console.log("Lista das informações de todos os produtos");
    console.log("- - - - - - - - - - - - - - - - - - - - - -\n");

    this.produtos.forEach((produto) => {
      console.log("Nome do produto: " + produto.nome);
      console.log("ID do produto: " + produto.getId);
      console.log("Preço do produto: " + produto.preco + "\n");
    });

    console.log("\n✨ Listagem concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ListagemProdutos;
