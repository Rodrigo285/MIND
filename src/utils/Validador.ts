export default class Validador {
  static naoNulo(valor: any, erro: string): string | null {
    return valor !== null && valor !== undefined ? null : erro;
  }
}
