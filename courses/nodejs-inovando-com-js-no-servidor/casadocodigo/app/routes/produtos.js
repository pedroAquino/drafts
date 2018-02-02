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

        req.assert('titulo', 'titulo é obrigatório')
            .notEmpty();

        let erros = req.validationErrors();
        
        if(erros) {
            res.redirect('produtos/novo');
            return;
        }


        produtosRepository.salva(req.body, function(erros, results) {
             res.redirect('/produtos');
        });

        connection.end();
    });

}