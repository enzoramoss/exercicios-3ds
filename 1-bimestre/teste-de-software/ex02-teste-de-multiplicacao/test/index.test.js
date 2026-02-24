/*  
test("", () => {
  expect()
})
*/

// toBe = testar valores simples
test("2 + 3 deve ser 5", () => {
  expect(2 + 3).toBe(5)
})

// toEqual = testar objetos e arrays
test("Objetos iguais", () => {
  const aluno  = { nome: "Ana", idade: 18 }
  expect(aluno).toEqual({ nome: "Ana", idade: 18 })
})

// toBeDefined = testar se a variável é definida
test("Variável definida", () => {
  const nome = "João"
  expect(nome).toBeDefined()
})

// toBeUndefined = testar se a variável é indefinida
test("Variável indefinida", () => {
  let sobrenome
  expect(sobrenome).toBeUndefined()
})

// toBeTruthy = testar se o valor é verdadeiro
test("Valor verdadeiro", () => {
  const ativo = true
  expect(ativo).toBeTruthy()
})

// toBeFalsy = testar se o valor é falso
test("Valor falso", () => {
  const inativo = false
  expect(inativo).toBeFalsy()
})

// toBeGreaterThan = testar se o valor é maior que outro
test("Valor maior que outro", () => {
  const idade = 20
  expect(idade).toBeGreaterThan(18)
})

// toBeLessThan = testar se o valor é menor que outro
test("Valor menor que outro", () => {
  const idade = 16
  expect(idade).toBeLessThan(18)
})