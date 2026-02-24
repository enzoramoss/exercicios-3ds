const multiplicacao = require("../index")

test("A multiplicação de 2 * 3 deve ser 6", () => {
    expect(multiplicacao(2, 3)).toBe(6)
})