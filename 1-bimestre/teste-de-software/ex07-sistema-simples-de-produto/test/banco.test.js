const { addProduct, cleanDataBase, listProducts } = require('../database/banco')

beforeEach(() => {
    cleanDataBase()
})

test("Produto é adicionado", () => {
    const products = listProducts() 
    addProduct({ nome: 'Produto' })

    expect(products.length).toBe(1)
})

test("Banco foi esvaziado", () => {
    const products = listProducts()

    expect(products.length).toBe(0)
})