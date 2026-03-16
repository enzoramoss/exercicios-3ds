let products = []

function addProduct(product) {
    products.push(product)
}

function listProducts() {
    return products
}

function cleanDataBase() {
    products = []
}

module.exports = { addProduct, cleanDataBase, listProducts }