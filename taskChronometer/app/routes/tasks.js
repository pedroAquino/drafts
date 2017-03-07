var express = require('express')
, mongoose = require('mongoose')
, http = require('http')
, Task = require('../schemas/Task')
, router = express.Router()
, taskRoutes = router.route('/')
, config = require('../config/config')
, connectionString = config.db;

taskRoutes.get(function(request, response) {

  mongoose.Promise = global.Promise;

  mongoose.connect(connectionString);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    Task.find({ 'archived' : false }, function(err, tasks) {
      db.close();
      response.send(tasks);
    });
  });

});

router.get('/:id', function(request, response) {
  mongoose.Promise = global.Promise;

  mongoose.connect(connectionString);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    Task.findById(request.params.id, function(err, task) {
      db.close();
      response.send(task);
    });

  });
});

taskRoutes.post(function(request, response){

  mongoose.Promise = global.Promise;

  mongoose.connect(connectionString);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

    var task = new Task(request.body);
    task.save(function(err, task) {
      db.close();
      response.sendStatus(200);
    });

  });
});

router.put('/:id', function(request, response) {

  mongoose.Promise = global.Promise;

  mongoose.connect(connectionString);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    Task.findById(request.params.id, function(err, task) {

      task.title = request.body.title;
      task.description = request.body.description;
      task.estimatedTime = request.body.estimatedTime;
      task.realizedTime = request.body.realizedTime;
      task.status = request.body.status;
      task.priority = request.body.priority;
      task.archived = request.body.archived;

      task.save(function(err, updatedTask) {
        console.log('updatedTask:');
        console.log(updatedTask);
        db.close();
        response.sendStatus(200);
      });
    });

  });

});

router.delete('/:id', function(request, response) {
  mongoose.Promise = global.Promise;

  mongoose.connect(connectionString);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    Task.findById(request.params.id, function(err, task) {
      task.remove(function(err) {
        db.close();
        response.sendStatus(200);
      });
    });

  });
});

module.exports = router;
