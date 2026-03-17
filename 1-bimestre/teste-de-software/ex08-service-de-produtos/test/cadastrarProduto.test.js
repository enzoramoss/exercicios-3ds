const { registerProduct } = require('../services/cadastrarProduto')
const { cleanList } = require('../database/banco')

beforeEach(() => {
    cleanList()
})

describe('Testes para cadastro de produtos', () => {
    test('Deve retornar true para produto com nome', () => {
        const product = { nome: 'GodOfWar: Ragnarok'}

        expect(registerProduct(product.nome)).toBeTruthy()
    })

    test('Deve retornar false para produto sem nome', () => {
        const product = {}

        expect(registerProduct(product.nome)).toBeFalsy()
    })
})