const { addProduct } = require('../database/banco')

function registerProduct(nome) {
    if (!nome) {
        return false
    }

    const product = { nome }
    addProduct(product)
    return true
}

module.exports = {
    registerProduct
}