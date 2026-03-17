let produtos = []

function addProduct(game) {
    produtos.push(game)
}

function returnList() {
    return produtos
}

function cleanList() {
    produtos = []
}

module.exports = {
    addProduct,
    returnList,
    cleanList
}