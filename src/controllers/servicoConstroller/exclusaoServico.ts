import Exclusao from "../exclusao";
import Input from "../../utils/input";
import Servico from "../../models/servico";
import Empresa from "../../models/empresa";

class ExclusaoServico extends Exclusao {
  private empresa: Empresa;
  private input: Input;

  constructor(empresa: Empresa) {
    super();
    this.empresa = empresa;
    this.input = new Input();
  }

  public excluir(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da exclusão de serviço");
    console.log("- - - - - - - - - - - - - - - - \n");

    let idServicoExcluido = this.input.receberNumero(
      "ID do serviço que deseja excluir: "
    );

    let servicosAtualizados: Servico[] = [];

    this.empresa.getServicos.map((servico) => {
      if (servico.getId !== idServicoExcluido) {
        servicosAtualizados.push(servico);
      }
    });

    this.empresa.setServicos(servicosAtualizados);

    console.log("\n✨ Exclusão concluída\n");
    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default ExclusaoServico;
