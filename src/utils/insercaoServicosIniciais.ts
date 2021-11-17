import Servico from "../models/servico";
import Cadastro from "../controllers/cadastro";

class InsercaoServicosIniciais extends Cadastro {
  private servicos: Array<Servico>;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
  }

  public cadastrar(): void {
    // 1
    this.servicos.push(new Servico("Manicure", 1, 15));

    // 2
    this.servicos.push(new Servico("Pedicure", 2, 15));

    // 3
    this.servicos.push(new Servico("Design de sombrancelhas", 3, 20));

    // 4
    this.servicos.push(new Servico("Corte de cabelo", 4, 50));

    // 5
    this.servicos.push(new Servico("Pintura de cabelo", 5, 50));

    // 6
    this.servicos.push(new Servico("Remoção  de manchas na pele", 6, 300));

    // 7
    this.servicos.push(new Servico("Aplicação de botox", 7, 150));

    // 8
    this.servicos.push(new Servico("Remoção de rugas", 8, 500));

    // 9
    this.servicos.push(new Servico("Tratamento para emagrecimento ", 9, 1100));

    // 10
    this.servicos.push(
      new Servico("Tratamento para redução de medidas", 10, 1000)
    );

    // 11
    this.servicos.push(new Servico("Modelagem e corte de barba", 11, 20));

    // 12
    this.servicos.push(new Servico("Tratamento de queda de cabelo", 12, 100));
  }
}

export default InsercaoServicosIniciais;
