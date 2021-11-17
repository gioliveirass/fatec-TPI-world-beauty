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
    // 1
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

    // 2
    this.clientes.push(
      new Cliente(
        "Thaís",
        "Thaís",
        1,
        new CPF(22222222222, new Date(2003, 18, 25)),
        [new RG(222222222, new Date(2003, 18, 25))],
        [new Telefone(12, 222222222)],
        [5, 6, 7, 8],
        [1, 2, 3, 4]
      )
    );

    // 3
    this.clientes.push(
      new Cliente(
        "André",
        "André",
        2,
        new CPF(33333333333, new Date(2003, 18, 25)),
        [new RG(333333333, new Date(2003, 18, 25))],
        [new Telefone(12, 333333333)],
        [11, 12, 13],
        [4]
      )
    );

    // 4
    this.clientes.push(
      new Cliente(
        "Lucas",
        "Lucas",
        2,
        new CPF(44444444444, new Date(2003, 18, 25)),
        [new RG(444444444, new Date(2003, 18, 25))],
        [new Telefone(12, 444444444)],
        [15, 16, 17, 18, 19, 20],
        [4, 5, 6]
      )
    );

    // 5
    this.clientes.push(
      new Cliente(
        "Cris",
        "Cris",
        3,
        new CPF(55555555555, new Date(2003, 18, 25)),
        [new RG(555555555, new Date(2003, 18, 25))],
        [new Telefone(12, 555555555)],
        [1, 2, 3, 4, 5],
        [4, 5, 6, 3, 8, 1]
      )
    );

    // 6
    this.clientes.push(
      new Cliente(
        "Alex",
        "Alex",
        3,
        new CPF(66666666666, new Date(2003, 18, 25)),
        [new RG(666666666, new Date(2003, 18, 25))],
        [new Telefone(12, 666666666)],
        [15],
        [3]
      )
    );

    // 7
    this.clientes.push(
      new Cliente(
        "Maria Eduarda",
        "Maria Eduarda",
        3,
        new CPF(77777777777, new Date(2003, 18, 25)),
        [new RG(777777777, new Date(2003, 18, 25))],
        [new Telefone(12, 777777777)],
        [3],
        [3]
      )
    );

    // 8
    this.clientes.push(
      new Cliente(
        "Patricia",
        "Patricia",
        1,
        new CPF(88888888888, new Date(2003, 18, 25)),
        [new RG(888888888, new Date(2003, 18, 25))],
        [new Telefone(12, 888888888)],
        [3, 2, 5],
        [3, 4, 5, 9]
      )
    );

    // 9
    this.clientes.push(
      new Cliente(
        "David",
        "David",
        2,
        new CPF(99999999999, new Date(2003, 18, 25)),
        [new RG(999999999, new Date(2003, 18, 25))],
        [new Telefone(12, 999999999)],
        [11],
        []
      )
    );

    // 10
    this.clientes.push(
      new Cliente(
        "Alice",
        "Alice",
        1,
        new CPF(10101010101, new Date(2003, 18, 25)),
        [new RG(111000111, new Date(2003, 18, 25))],
        [new Telefone(12, 111000111)],
        [8],
        [1, 2, 3]
      )
    );

    // 11
    this.clientes.push(
      new Cliente(
        "Matehus",
        "Matheus",
        3,
        new CPF(11100011101, new Date(2003, 18, 25)),
        [new RG(100111111, new Date(2003, 18, 25))],
        [new Telefone(12, 111000101)],
        [8, 9, 13],
        [1, 2, 3, 5, 10]
      )
    );

    // 12
    this.clientes.push(
      new Cliente(
        "Heloísa",
        "Heloísa",
        3,
        new CPF(12121212121, new Date(2003, 18, 25)),
        [new RG(111222111, new Date(2003, 18, 25))],
        [new Telefone(12, 111222111)],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6, 10]
      )
    );

    // 13
    this.clientes.push(
      new Cliente(
        "Camila",
        "Camila",
        1,
        new CPF(12121212121, new Date(2003, 18, 25)),
        [new RG(111222111, new Date(2003, 18, 25))],
        [new Telefone(12, 111222111)],
        [9, 1],
        [1, 2, 3, 4, 5]
      )
    );

    // 14
    this.clientes.push(
      new Cliente(
        "Rafael",
        "Rafael",
        3,
        new CPF(14141414141, new Date(2003, 18, 25)),
        [new RG(111444111, new Date(2003, 18, 25))],
        [new Telefone(12, 111444111)],
        [16, 17, 18, 19, 20],
        [3]
      )
    );

    // 15
    this.clientes.push(
      new Cliente(
        "Daniel",
        "Daniel",
        2,
        new CPF(15151515151, new Date(2003, 18, 25)),
        [new RG(111555111, new Date(2003, 18, 25))],
        [new Telefone(12, 111555111)],
        [19, 20],
        [8, 9, 10, 11]
      )
    );

    // 16
    this.clientes.push(
      new Cliente(
        "Larissa",
        "Larissa",
        1,
        new CPF(16161616161, new Date(2003, 18, 25)),
        [new RG(111666111, new Date(2003, 18, 25))],
        [new Telefone(12, 111666111)],
        [1, 3, 6],
        [7, 5, 10]
      )
    );

    // 17
    this.clientes.push(
      new Cliente(
        "Aline",
        "Aline",
        1,
        new CPF(17171717171, new Date(2003, 18, 25)),
        [new RG(111777111, new Date(2003, 18, 25))],
        [new Telefone(12, 111777111)],
        [3, 7, 8],
        [3, 7, 8]
      )
    );

    // 18
    this.clientes.push(
      new Cliente(
        "Hana",
        "Hana",
        3,
        new CPF(18181818181, new Date(2003, 18, 25)),
        [new RG(111888111, new Date(2003, 18, 25))],
        [new Telefone(12, 111888111)],
        [3, 4, 8],
        [3, 7, 8, 9, 10]
      )
    );

    // 19
    this.clientes.push(
      new Cliente(
        "Miles",
        "Miles",
        2,
        new CPF(19191919191, new Date(2003, 18, 25)),
        [new RG(111999111, new Date(2003, 18, 25))],
        [new Telefone(12, 111999111)],
        [3, 4, 10],
        [1, 2, 3, 4, 11, 12]
      )
    );

    // 20
    this.clientes.push(
      new Cliente(
        "Gregory",
        "Gregory",
        2,
        new CPF(20202020202, new Date(2003, 18, 25)),
        [new RG(222000222, new Date(2003, 18, 25))],
        [new Telefone(12, 222000222)],
        [11, 12, 13, 14],
        [1, 8, 9, 11]
      )
    );

    // 21
    this.clientes.push(
      new Cliente(
        "Rodrigo",
        "Rodrigo",
        2,
        new CPF(21212121212, new Date(2003, 18, 25)),
        [new RG(222111222, new Date(2003, 18, 25))],
        [new Telefone(12, 222111222)],
        [11, 12, 13, 14],
        [1, 8, 9, 11]
      )
    );

    // 22
    this.clientes.push(
      new Cliente(
        "Luan",
        "Luan",
        2,
        new CPF(21212122222, new Date(2003, 18, 25)),
        [new RG(222111112, new Date(2003, 18, 25))],
        [new Telefone(12, 222111112)],
        [13, 14],
        [1, 9, 10, 11]
      )
    );

    // 23
    this.clientes.push(
      new Cliente(
        "Luan",
        "Luan",
        2,
        new CPF(23232323232, new Date(2003, 18, 25)),
        [new RG(222333222, new Date(2003, 18, 25))],
        [new Telefone(12, 222333222)],
        [15, 16, 17],
        [1, 11, 12]
      )
    );

    // 24
    this.clientes.push(
      new Cliente(
        "Caitlyn",
        "Caitlyn",
        1,
        new CPF(24242424242, new Date(2003, 18, 25)),
        [new RG(222444222, new Date(2003, 18, 25))],
        [new Telefone(12, 222444222)],
        [1, 2, 3, 4, 10],
        [1, 9, 10]
      )
    );

    // 25
    this.clientes.push(
      new Cliente(
        "Clarissa",
        "Clarissa",
        1,
        new CPF(25252525252, new Date(2003, 18, 25)),
        [new RG(222555222, new Date(2003, 18, 25))],
        [new Telefone(12, 222555222)],
        [1, 2, 3, 4, 10],
        [1, 9, 10]
      )
    );

    // 26
    this.clientes.push(
      new Cliente(
        "Vitoria",
        "Vitoria",
        1,
        new CPF(26262626262, new Date(2003, 18, 25)),
        [new RG(222666222, new Date(2003, 18, 25))],
        [new Telefone(12, 222666222)],
        [1, 2, 10],
        [1, 2, 10]
      )
    );

    // 27
    this.clientes.push(
      new Cliente(
        "Bianca",
        "Bianca",
        1,
        new CPF(27272727272, new Date(2003, 18, 25)),
        [new RG(222777222, new Date(2003, 18, 25))],
        [new Telefone(12, 222777222)],
        [1, 2, 9, 10],
        [1, 2, 10]
      )
    );

    // 28
    this.clientes.push(
      new Cliente(
        "Sofia",
        "Sofia",
        1,
        new CPF(28282828282, new Date(2003, 18, 25)),
        [new RG(222888222, new Date(2003, 18, 25))],
        [new Telefone(12, 222888222)],
        [2, 9, 10],
        [1, 2, 3, 10]
      )
    );

    // 29
    this.clientes.push(
      new Cliente(
        "Roberta",
        "Roberta",
        1,
        new CPF(29292929292, new Date(2003, 18, 25)),
        [new RG(222999222, new Date(2003, 18, 25))],
        [new Telefone(12, 222888222)],
        [2, 9, 3, 1, 10],
        [1, 2, 3, 9]
      )
    );

    // 30
    this.clientes.push(
      new Cliente(
        "Gisele",
        "Gisele",
        1,
        new CPF(33300033303, new Date(2003, 18, 25)),
        [new RG(333000333, new Date(2003, 18, 25))],
        [new Telefone(12, 333000333)],
        [2, 9],
        [3]
      )
    );
  }
}

export default InsercaoClientesIniciais;
