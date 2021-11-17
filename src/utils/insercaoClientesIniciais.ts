import Cliente from "../models/cliente";
import Cadastro from "../controllers/cadastro";

import CPF from "../models/cpf";
import RG from "../models/rg";
import Telefone from "../models/telefone";

class InsercaoClientesIniciais extends Cadastro {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public cadastrar(): void {
    this.clientes.push(
      new Cliente(
        "Giovana",
        "Giovana",
        1,
        new CPF(11111111111, new Date(2003, 18, 25)),
        [new RG(111111111, new Date(2003, 18, 25))],
        [new Telefone(12, 111111111)],
        [1, 2],
        [1]
      )
    );
  }
}

export default InsercaoClientesIniciais;
