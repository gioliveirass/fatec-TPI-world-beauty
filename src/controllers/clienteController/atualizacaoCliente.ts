import Atualizar from "../atualizar";
import Input from "../../utils/input";
import Cliente from "../../models/cliente";
import RG from "../../models/rg";
import Telefone from "../../models/telefone";

class AtualizarCliente extends Atualizar {
  private clientes: Array<Cliente>;
  private input: Input;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.input = new Input();
  }

  public atualizar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início da atualização de cliente");
    console.log("- - - - - - - - - - - - - - - - \n");

    let cpfCliente = this.input.receberNumero(
      "Número do CPF do cliente que você deseja atualizar: "
    );

    this.clientes.forEach((cliente) => {
      if (cpfCliente == cliente.getCpf.getValor) {
        /* ---------------------------- */
        /* Atualizando nome do cliente */
        /* --------------------------- */

        console.log("\nDeseja atualizar o nome do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarNome = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeNovo = this.input.receberTexto(
            "Digite o nome novo do cliente: "
          );
          cliente.setNome(nomeNovo);
        } else {
          console.log("Ok");
        }

        /* ---------------------------------- */
        /* Atualizando nome social do cliente */
        /* ---------------------------------- */

        console.log("\nDeseja atualizar o nome social do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarNomeSocial = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeSocialNovo = this.input.receberTexto(
            "Digite o nome social novo do cliente: "
          );
          cliente.setNomeSocial(nomeSocialNovo);
        } else {
          console.log("Ok");
        }

        /* ----------------------------- */
        /* Atualizando gênero do cliente */
        /* ----------------------------- */

        console.log("\nDeseja atualizar o gênero do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let atualizarGenero = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarGenero == 1) {
          console.log("\nSelecione uma opção: ");
          console.log("       1 - Feminino");
          console.log("       2 - Masculino");
          console.log("       3 - Outro/confidencial\n");
          let generoNovo = this.input.receberNumero(
            "Digite o número correspondente: "
          );
          cliente.setGenero(generoNovo);
        } else {
          console.log("Ok");
        }

        /* -------------------------- */
        /* Atualizando RGs do cliente */
        /* -------------------------- */

        console.log("\nDeseja adicionar um novo RG do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let novoRg = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (novoRg == 1) {
          let numeroRG = this.input.receberNumero("\nNúmero do RG: ");
          let dataRG = this.input.receberTexto(
            "Data de emissão do RG (padrão dd/mm/yyyy): "
          );

          let partesDataRG = dataRG.split("/");

          let ano = new Number(partesDataRG[2].valueOf()).valueOf();
          let mes = new Number(partesDataRG[1].valueOf()).valueOf();
          let dia = new Number(partesDataRG[0].valueOf()).valueOf();
          let dataEmissaoRG = new Date(ano, mes, dia);

          let rgs = cliente.getRgs;
          rgs.push(new RG(numeroRG, dataEmissaoRG));

          cliente.setRgs(rgs);
        } else {
          console.log("Ok");
        }

        /* -------------------------------- */
        /* Atualizando telefones do cliente */
        /* -------------------------------- */

        // Remover telefone?

        console.log("\nDeseja remover algum telefone do cliente? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let removerTelefone = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (removerTelefone == 1) {
          let dddTelefone = this.input.receberNumero(
            "DDD do telefone que que será removido: "
          );
          let numeroTelefone = this.input.receberNumero(
            "Número do telefone que será removido: "
          );

          let telefonesAtualizado = cliente.getTelefones.filter((telefone) => {
            telefone.getDdd !== dddTelefone &&
              telefone.getNumero !== numeroTelefone;
          });

          cliente.setTelefones(telefonesAtualizado);

          // Remover mais telefones?

          console.log("\nDeseja remover mais algum telefone do cliente? ");
          console.log("   1 - Sim");
          console.log("   2 - Não");
          let removerMaisTelefones = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (removerMaisTelefones == 1) {
            let dddOutroTelefone = this.input.receberNumero(
              "DDD do telefone que que será removido: "
            );
            let numeroOutroTelefone = this.input.receberNumero(
              "Número do telefone que será removido: "
            );

            let telefonesAtualizadoNovamente = cliente.getTelefones.filter(
              (telefone) => {
                telefone.getDdd !== dddOutroTelefone &&
                  telefone.getNumero !== numeroOutroTelefone;
              }
            );

            cliente.setTelefones(telefonesAtualizadoNovamente);
          }
        } else {
          console.log("Ok");
        }

        // Adicionar telefones?

        console.log("\nDeseja adicionar algum telefone? ");
        console.log("       1 - Sim");
        console.log("       2 - Não\n");

        let adicionarTelefone = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (adicionarTelefone == 1) {
          let dddTelefoneNovo = this.input.receberNumero(
            "DDD do telefone que que será adicionado: "
          );
          let numeroTelefoneNovo = this.input.receberNumero(
            "Número do telefone que será adicionado: "
          );

          let telefonesAtualizado = cliente.getTelefones;
          telefonesAtualizado.push(
            new Telefone(dddTelefoneNovo, numeroTelefoneNovo)
          );

          cliente.setTelefones(telefonesAtualizado);

          // Adicionar mais telefones?

          console.log("\nDeseja adicionar mais algum telefone? ");
          console.log("   1 - Sim");
          console.log("   2 - Não");
          let adicionarMaistelefones = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (adicionarMaistelefones == 1) {
            let dddOutroTelefoneAdicionado = this.input.receberNumero(
              "DDD do telefone que que será adicionado: "
            );
            let numeroOutroTelefoneAdicionado = this.input.receberNumero(
              "Número do telefone que será adicionado: "
            );

            let telefonesAtualizado = cliente.getTelefones;
            telefonesAtualizado.push(
              new Telefone(
                dddOutroTelefoneAdicionado,
                numeroOutroTelefoneAdicionado
              )
            );

            cliente.setTelefones(telefonesAtualizado);
          }
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

export default AtualizarCliente;
