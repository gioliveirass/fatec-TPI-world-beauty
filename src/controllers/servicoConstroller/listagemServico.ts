import Servico from "../../models/servico";
import Listagem from "../listagem";

class ListagemServicos extends Listagem {
  private servicos: Array<Servico>;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
  }

  public listar(): void {
    console.log("\n- - - - - - - - - - - - - - - - - - - - - -");
    console.log("Lista das informações de todos os serviços");
    console.log("- - - - - - - - - - - - - - - - - - - - - -\n");

    this.servicos.forEach((servico) => {
      console.log("Nome do serviço: " + servico.nome);
      console.log("ID do serviço: " + servico.getId);
      console.log("Preço do serviço: " + servico.preco + "\n");
    });

    console.log("\n✨ Listagem concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ListagemServicos;
