import Exclusao from "../exclusao";
import Input from "../../utils/input";
import Produto from "../../models/produto";
import Empresa from "../../models/empresa";

class ExclusaoProduto extends Exclusao {
  private empresa: Empresa;
  private input: Input;

  constructor(empresa: Empresa) {
    super();
    this.empresa = empresa;
    this.input = new Input();
  }

  public excluir(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da exclusão de produto");
    console.log("- - - - - - - - - - - - - - - - \n");

    let idProdutoExcluido = this.input.receberNumero(
      "ID do produto que deseja excluir: "
    );

    let produtosAtualizados: Produto[] = [];

    this.empresa.getProdutos.map((produto) => {
      if (produto.getId !== idProdutoExcluido) {
        produtosAtualizados.push(produto);
      }
    });

    this.empresa.setProdutos(produtosAtualizados);

    console.log("\n✨ Exclusão concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ExclusaoProduto;
