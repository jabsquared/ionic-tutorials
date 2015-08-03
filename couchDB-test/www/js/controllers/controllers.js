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
