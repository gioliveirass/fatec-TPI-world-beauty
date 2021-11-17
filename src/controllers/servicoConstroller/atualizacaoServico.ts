import Atualizacao from "../atualizacao";
import Input from "../../utils/input";
import Servico from "../../models/servico";

class AtualizacaoServico extends Atualizacao {
  private servicos: Array<Servico>;
  private input: Input;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.input = new Input();
  }

  public atualizar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da atualização de produto");
    console.log("- - - - - - - - - - - - - - - - \n");

    let idProduto = this.input.receberNumero(
      "ID do produto que você deseja atualizar: "
    );

    this.servicos.forEach((servico) => {
      if (idProduto == servico.getId) {
        console.log("\nDeseja atualizar o nome do serviço? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarNome = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeNovo = this.input.receberTexto(
            "Digite o nome novo do serviço: "
          );
          servico.setNome(nomeNovo);
        } else {
          console.log("Ok");
        }

        console.log("\nDeseja atualizar o preço do serviço? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarPreco = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarPreco == 1) {
          let precoNovo = this.input.receberNumero(
            "Digite o preço novo do serviço: "
          );
          servico.setPreco(precoNovo);
        } else {
          console.log("Ok");
        }

        console.log("\n✨ Atualização concluída\n");
      }
    });

    console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default AtualizacaoServico;
