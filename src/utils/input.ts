import promptSync from "prompt-sync";

class Input {
  public receberNumero(mensagem: string): number {
    let prompt = promptSync();
    let valor = prompt(mensagem);
    let numero = new Number(valor);
    return numero.valueOf();
  }

  public receberTexto(mensagem: string): string {
    let prompt = promptSync();
    let texto = prompt(mensagem);
    return texto;
  }
}

export default Input;
