test("5 maior que 3", () => {
    expect(5).toBeGreaterThan(3)
})

test("Texto 'Teste de Software' contém 'Software'", () => { expect("Teste de Software").toContain("Software") })

test("Objeto { aprovado: true } é igual ao esperado", () => {
    const aluno = { aprovado: true }
    expect(aluno).toEqual({ aprovado: true })
})

// test('Se um objeto tem a propriedade aprovado, o valor deve ser true', () => {
//     const aluno = { nome: "Maria", aprovado: true }
//     expect(aluno).toHaveProperty("aprovado", true)
// })