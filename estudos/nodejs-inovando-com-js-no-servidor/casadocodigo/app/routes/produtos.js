module.exports = function(app) {
    
    app.get('/produtos', (req, res) => {

        let connection =  app.infra.dbConnectionFactory();
        let produtosRepository = new app.infra.ProdutosRepository(connection);

        produtosRepository.lista(function(erros, results) {
             res.format({
                 html: function() {
                    res.render('produtos/lista',{lista:results});
                 },
                 json: function() {
                    res.json(results);
                 }
             });
        });

        connection.end();
    });

    app.get('/produtos/novo', (req, res) => {
        res.render('produtos/novo');
    });

    app.post('/produtos', (req, res) => {
        
        let connection =  app.infra.dbConnectionFactory();
        let produtosRepository = new app.infra.ProdutosRepository(connection);

        produtosRepository.salva(req.body, function(erros, results) {
             res.redirect('/produtos');
        });

        connection.end();
    });

}