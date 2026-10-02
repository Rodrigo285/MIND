import Maquina from "../../../src/core/maquina/Maquina";
test("Deve criar um objeto maquina", () => {
  const injetora = new Maquina({
    tag: "IJ-0305",
    marca: "Tederic",
    modelo: "TRX 188F",
    tipo: "Injetora",
    fornecedor: "Pavan Zanetti",
    dataFabricacao: new Date(2001, 0, 1),
  });

  expect(injetora.tag).toBe("IJ-0305");
});
