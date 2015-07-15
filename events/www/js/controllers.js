app.controller('EventsCtrl', ['$scope', function($scope){
  console.log("in controller");
  $scope.events = [
    {
      name: "event 1"
    },
    {
      name: "event 2"
    },
    {
      name: "event 3"
    }
  ]
}]);
