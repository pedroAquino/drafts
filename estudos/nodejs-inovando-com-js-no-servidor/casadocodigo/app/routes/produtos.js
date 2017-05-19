module.exports = function(app) {
    
    app.get('/produtos', (req, res) => {
        console.log("hello !!!");

        let connection =  app.infra.dbConnectionFactory();
        let produtosRepository = app.infra.produtosRepository(connection);

        /*produtosRepository.lista(function (erros, results) {
             res.render('produtos/lista',{lista:resultados});
        });*/
      
        /*connection.query('select * from produtos', (err, result) => {
            res.render("produtos/lista", { lista: result });
        });*/

        connection.end();

    });
}