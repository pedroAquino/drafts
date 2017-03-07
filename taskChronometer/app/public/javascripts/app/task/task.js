angular.module('Task', [
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/tasks',
    controller: 'TasksController'
  });
  $routeProvider.when('/tasks/task/:id', {
    templateUrl: 'templates/task',
    controller: 'TasksController'
  });
  $routeProvider.when('/tasks/add', {
    templateUrl: 'templates/add',
    controller: 'TasksController'
  });

})

.controller('TasksController', ['$scope', 'TasksService', function($scope, tasksService) {

  // ** general properties
  $scope.tasks = [];
  $scope.task = {
    title: '',
    description: '',
    estimatedTime: 0,
    realizedTime: 0,
    status: '',
    priority: {
      mustHave: false,
      exciting: false
    },
    archived: false
  };
  $scope.lastCall = null;

  $scope.taskId = location.href.substr(
    location.href.lastIndexOf('/') + 1
  );

  // ** CRUD methods
  $scope.list = function() {
    tasksService.list(function(response) {
      $scope.lastCall = response;
      $scope.tasks = response.data;
    });
  };

   $scope.get = function(id) {
    tasksService.get(id, function(response) {
      $scope.lastCall = response;
      $scope.task = response.data;
      $scope.task._id = id;
      console.log($scope.task);
    });
  };

  $scope.create = function(task) {
    tasksService.post(task, function(response) {
      $scope.lastCall = response;
      alert('TASK ' + task.title + ' SAVED TO DADATABASE.');
    });
  };

  $scope.update = function(task) {
    tasksService.put(task, function(response) {
      $scope.lastCall = response;
      alert('TASK ' + task.title + ' SAVED TO DADATABASE.');
    });
  };

  $scope.delete = function(id) {
    tasksService.delete(id, function(response) {
      $scope.lastCall = response;
      alert('TASK ' + task.title + ' DELETED FROM DADATABASE.');
    });
  };

  // ** list.pug properties and methods
  $scope.archive = function(task) {
    task.archived = true;
    $scope.update(task);
  }

  // ** add.pug properties and methods
  $scope.save = function() {
    $scope.task.status = 'new';
    $scope.task.estimatedTime = parseInt(
      $scope.task.estimatedTime
    );
    $scope.create($scope.task);
  };

  // ** task.pug properties and methods
  $scope.chronometer = false;
  $scope.chronometer = {
    minutes: '00',
    seconds: '00'
  };

  var intervalId;

  $scope.initChronometer = function() {
    tasksService.get($scope.taskId, function(response) {
      if (response.data.realizedTime <= 0) { return; }
      else {
        var minutes = response.data.realizedTime;
        $scope.chronometer.minutes = (
          (minutes.toString().length > 1) ? minutes.toString() : '0' + minutes.toString()
        );
      }
    });
  };

  $scope.start = function() {
    if ($scope.started) { return; }
    $scope.started = true;

    intervalId = setInterval(function() {
      $scope.$apply(function(){
        var seconds = parseInt($scope.chronometer.seconds);
        var minutes = parseInt($scope.chronometer.minutes);

        if (seconds >= 60) {
          minutes++;
          $scope.chronometer.seconds = '00';
          $scope.chronometer.minutes = (
            (minutes.toString().length > 1) ? minutes.toString() : '0' + minutes.toString()
          );
        }
        else {
          seconds++;
          $scope.chronometer.seconds = (
            (seconds.toString().length > 1) ? seconds.toString() : '0' + seconds.toString()
          );
        }
      });

    }, 1000);
  };

  $scope.stop = function() {
    if (!$scope.started) { return; }
    $scope.started = false;

    clearInterval(intervalId);
    intervalId = undefined;

    $scope.task.realizedTime = $scope.chronometer.minutes;
    $scope.task.status = 'doing';
    $scope.update($scope.task);
  };

  $scope.finish = function() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
    $scope.task.realizedTime = $scope.chronometer.minutes;
    $scope.task.status = 'done';
    $scope.update($scope.task);
  }


}])

.factory('TasksService', ['$http', function($http) {

  return {

    list:  function(successCallback) {
      $http.get('/api/tasks').then(successCallback,
        function(response) {
          console.log('ERROR: ');
          console.log(response);
        });
    },

    get:  function(id, successCallback) {
      $http.get('/api/tasks/' + id).then(successCallback,
        function(response) {
          console.log('ERROR: ');
          console.log(response);
        });
    },

    post: function(task, successCallback) {

      if (task._id) { throw  "Cannot create task with _id" }

      $http.post('/api/tasks', task).then(successCallback,
        function(response) {
          console.log('ERROR: ');
          console.log(response);
        });
    },

    put: function(task, successCallback) {

      if (!task._id) { throw  "Cannot update task without _id" }

      $http.put('/api/tasks/' + task._id, task).then(successCallback,
        function(response) {
          console.log('ERROR: ');
          console.log(response);
        });
    },

    delete: function(id, successCallback) {
      $http.delete('/api/tasks/' + id).then(successCallback,
        function(response) {
          console.log('ERROR: ');
          console.log(response);
        });
    }

  }

}]);
