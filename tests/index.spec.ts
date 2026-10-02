import soma from "../src/index";

describe("Primeiro teste", () => {
  test("deve funcionar", () => {
    expect(true).toBe(true);
  });
});

test("deve apresentar o resultado da soma", () => {
  expect(soma(2, 5)).toEqual(7);
});
