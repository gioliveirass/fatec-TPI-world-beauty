import Servico from "../models/servico";
import Cadastro from "../controllers/cadastro";

class InsercaoServicosIniciais extends Cadastro {
  private servicos: Array<Servico>;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
  }

  public cadastrar(): void {
    this.servicos.push(new Servico("Remoção de rugas", 1, 500));
  }
}

export default InsercaoServicosIniciais;
