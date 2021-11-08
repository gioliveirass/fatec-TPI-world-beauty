import Produto from "../models/produto";
import Cadastro from "../controllers/cadastro";

class InsercaoProdutosIniciais extends Cadastro {
  private produtos: Array<Produto>;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
  }

  public cadastrar(): void {
    this.produtos.push(new Produto("Shampoo de Coco 5L Zapyle", 1, 75));
    this.produtos.push(
      new Produto(
        "Kit Wella Professionals Invigo Nutri-Enrich Salon Duo",
        2,
        269
      )
    );
    this.produtos.push(
      new Produto("Kit Wella Professionals Fusion Salon Duo", 3, 319)
    );
  }
}

export default InsercaoProdutosIniciais;
