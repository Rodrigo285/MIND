import Validador from "../../../src/utils/Validador";

test("Deve retornar um valor valido ", () => {
  const nome = "Rodrigo";
  expect(Validador.naoNulo(nome, "O nome e obrigatorio")).toBeNull();
});
