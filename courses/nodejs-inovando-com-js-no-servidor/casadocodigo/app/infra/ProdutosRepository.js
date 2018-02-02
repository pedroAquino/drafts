function ProdutosRepository(connection) {
    this._connection = connection;
}

ProdutosRepository.prototype.lista = function(callback) {
    this._connection.query('select * from produtos',callback);    
};

ProdutosRepository.prototype.salva = function(produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);    
};

module.exports = function(){
    return ProdutosRepository;
}