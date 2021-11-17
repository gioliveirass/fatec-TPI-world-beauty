import Atualizar from "../atualizar";
import Input from "../../utils/input";
import Produto from "../../models/produto";

class AtualizarProduto extends Atualizar {
  private produtos: Array<Produto>;
  private input: Input;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.input = new Input();
  }

  public atualizar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da atualização de produto");
    console.log("- - - - - - - - - - - - - - - - \n");

    let idProduto = this.input.receberNumero(
      "ID do produto que você deseja atualizar: "
    );

    this.produtos.forEach((produto) => {
      if (idProduto == produto.getId) {
        console.log("\nDeseja atualizar o nome do produto? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarNome = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeNovo = this.input.receberTexto(
            "Digite o nome novo do produto: "
          );
          produto.setNome(nomeNovo);
        } else {
          console.log("Ok");
        }

        console.log("\nDeseja atualizar o preço do produto? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarPreco = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarPreco == 1) {
          let precoNovo = this.input.receberNumero(
            "Digite o nome novo do produto: "
          );
          produto.setPreco(precoNovo);
        } else {
          console.log("Ok");
        }

        console.log("\n✨ Cadastro concluído\n");
      }
    });

    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default AtualizarProduto;
