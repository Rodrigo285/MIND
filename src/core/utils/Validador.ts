export default class Validador {
  static naoNulo(valor: any, erro: string): string | null {
    return valor !== null && valor !== undefined ? null : erro;
  }

  static naoVazio(valor: string | null | undefined, erro: string): string | null {
    if (Validador.naoNulo(valor, "Valor invalido")) return erro;
    return valor!.trim() !== "" ? null : erro;
  }

  static tamanhoMenorQue(
    valor: string | any[],
    tamanhoMaximo: number,
    erro: string,
  ): string | null {
    return valor.length < tamanhoMaximo ? null : erro;
  }

  static tamanhoMaiorQue(
    valor: string | any[],
    tamanhoMinimo: number,
    erro: string,
  ): string | null {
    return valor.length > tamanhoMinimo ? null : erro;
  }

  static regex(valor: string, regex: RegExp, erro: string): string | null {
    return regex.test(valor) ? null : erro;
  }

  static isEmailValido(email: string): boolean {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  }
}
