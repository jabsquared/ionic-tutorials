var app = angular.module('starter', ['ionic']);

var localDB = new PouchDB("todos");

var remoteDB = new PouchDB('https://itchentleverturearywhers:U7vFQNN2joOhU03Mw0iUx3SN @af48ada6-78db-4210-a80d-86619c82407e-bluemix.cloudant.com/my_sample_db', {
  auth: {
    username: 'itchentleverturearywhers',
    password: 'U7vFQNN2joOhU03Mw0iUx3SN'
  }
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    //auto sync shit
    localDB.sync(remoteDB, { live:true });
  });
})

app.controller("TodoCtrl", function($scope, $ionicPopup, PouchDBListener){
  $scope.todos = [];

    $scope.create = function() {
        $ionicPopup.prompt({
            title: 'Enter a new TODO item',
            inputType: 'text'
        })
        .then(function(result) {
            if(result !== "") {
                if($scope.hasOwnProperty("todos") !== true) {
                    $scope.todos = [];
                }
                localDB.post({title: result});
            } else {
                console.log("Action not completed");
            }
        });
    }

    $scope.$on('add', function(event, todo) {
        $scope.todos.push(todo);
    });

    $scope.$on('delete', function(event, id) {
        for(var i = 0; i < $scope.todos.length; i++) {
            if($scope.todos[i]._id === id) {
                $scope.todos.splice(i, 1);
            }
        }
    });
});

// factory that listens for data changes

app.factory('PouchDBListener', function($rootScope) {

    localDB.changes({
        continuous: true,
        onChange: function(change) {
            if (!change.deleted) {
                $rootScope.$apply(function() {
                    localDB.get(change.id, function(err, doc) {
                        $rootScope.$apply(function() {
                            if (err) console.log(err);
                            $rootScope.$broadcast('add', doc);
                        })
                    });
                })
            } else {
                $rootScope.$apply(function() {
                    $rootScope.$broadcast('delete', change.id);
                });
            }
        }
    });

    return true;

});
