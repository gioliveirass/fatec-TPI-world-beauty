import Produto from "../models/produto";
import Cadastro from "../controllers/cadastro";

class InsercaoProdutosIniciais extends Cadastro {
  private produtos: Array<Produto>;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
  }

  public cadastrar(): void {
    // 1
    this.produtos.push(new Produto("Shampoo de Coco 5L Zapyle", 1, 75));

    // 2
    this.produtos.push(
      new Produto(
        "Kit Wella Professionals Invigo Nutri-Enrich Salon Duo",
        2,
        269
      )
    );

    // 3
    this.produtos.push(
      new Produto("Kit Wella Professionals Fusion Salon Duo", 3, 319)
    );

    // 4
    this.produtos.push(
      new Produto(
        "Progressiva Oriental Escova Japonesa Lizzy Sem Formol 2x1lt",
        4,
        135
      )
    );

    // 5
    this.produtos.push(
      new Produto(
        "Kit Completo Cacheamento Salão De Beleza Apse 5 Produtos",
        5,
        293
      )
    );

    // 6
    this.produtos.push(new Produto("Kit Meu Cacho Minha Vida Duo", 6, 49));

    // 7
    this.produtos.push(
      new Produto("Kit Inoar Argan Oil Mask (2 Produtos)", 7, 69)
    );

    // 8
    this.produtos.push(
      new Produto("Shampoo e Condicionador Vitay Linda e Radiante", 8, 6)
    );

    // 9
    this.produtos.push(
      new Produto(
        "Máscara de Hidratação Novex Recarga Biomassa de Banana e Açúcar Mascavo 80g",
        9,
        12
      )
    );

    // 10
    this.produtos.push(
      new Produto(
        "Kit Cremes de Tratamento Novex Superfood Cronograma Capilar",
        10,
        42
      )
    );

    // 11
    this.produtos.push(new Produto("Espuma de Barbear Uomini, 200ml", 11, 17));

    // 12
    this.produtos.push(
      new Produto("Espuma de Barbear Portinari, 200ml", 12, 21)
    );

    // 13
    this.produtos.push(
      new Produto("Óleo Pré e Pós Barba Malbec Club, 25ml", 13, 46)
    );

    // 14
    this.produtos.push(
      new Produto(
        "Combo Malbec Club Barba: Gel Espuma + Balm Pós Barba + Óleo para Barba",
        14,
        159
      )
    );

    // 15
    this.produtos.push(
      new Produto(
        "Shampoo color grecin 5 tonalizante masculino castanho escuro 60ML 1 unidade",
        15,
        30
      )
    );

    // 16
    this.produtos.push(
      new Produto(
        "Shampoo Cabelo e Corpo Kaiak Masculino Natura 150 ml",
        16,
        19
      )
    );

    // 17
    this.produtos.push(
      new Produto(
        "Shampoo Antiqueda Masculino Keune 1922 Fortifying 1l",
        17,
        230
      )
    );

    // 18
    this.produtos.push(
      new Produto(
        "Shampoo Head & Shoulders Anticaspa 3 em 1 Masculino 200m",
        18,
        15
      )
    );

    // 19
    this.produtos.push(new Produto("Shampoo Kapeh Triativo Masculino", 19, 37));

    // 20
    this.produtos.push(
      new Produto(
        "Felps Shampoo Masculino Barba Cabelo Poker Men 240ml",
        20,
        26
      )
    );
  }
}

export default InsercaoProdutosIniciais;
