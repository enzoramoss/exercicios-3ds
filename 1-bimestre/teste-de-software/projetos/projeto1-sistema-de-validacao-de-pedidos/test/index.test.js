const validarPedido = require('../index')

test('Pedido válido deve retornar true', () => {
    const pedido = {
        valorTotal: 100,
        itens: ['Item 1', 'Item 2'],
        cliente: 'João',
    }
    expect(validarPedido(pedido)).toBe(true)
})

test('Pedido com total 0 deve retornar false', () => {
    const pedido = {
        valorTotal: 0,
        itens: ['Item 1', 'Item 2'],
        cliente: 'João',
    }
    expect(validarPedido(pedido)).toBe(false)
})

test('Pedido sem cliente deve retornar false', () => {
    const pedido = {
        valorTotal: 100,
        itens: ['Item 1', 'Item 2'],
    }
    expect(validarPedido(pedido)).toBe(false)
})

test('Pedido sem itens deve retornar false', () => {
    const pedido = {
        valorTotal: 100,
        cliente: 'João',
    }
    expect(validarPedido(pedido)).toBe(false)
})
