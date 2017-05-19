function ProdutosRepository(connection) {
    
    this.lista = function(callBack) {
        connection.query('select * from produtos', callback)
    }

    return this;
}

module.exports = function() {
    return ProdutosRepository;
}