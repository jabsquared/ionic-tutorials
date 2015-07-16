app.controller('EventsCtrl', ['$scope', 'event_data', function($scope, event_data){
  console.log("in controller");
  $scope.events = event_data;
}]);
