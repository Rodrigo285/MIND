import TagMaquina from "../../../src/core/shared/TagMaquina";
import Erros from "../../../src/core/constants/Erros";

test("Deve criar um tag valida", () => {
  const tag = new TagMaquina("IJ-0305");
  expect(tag.valor).toBe("IJ-0305");
});

test("Deve lançar um erro", () => {
  expect(() => new TagMaquina("ij-0305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro", () => {
  expect(() => new TagMaquina("IJ-305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro", () => {
  expect(() => new TagMaquina("IJ0305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro para mais de duas letras", () => {
  expect(() => new TagMaquina("ABCD-0305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro para mais de quatro numeros", () => {
  expect(() => new TagMaquina("IJ-000305")).toThrow(Erros.TAG_INVALIDA);
});
