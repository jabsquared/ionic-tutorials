// All of the apps controllers are located here.

app.controller('TicketsCtrl', ['$scope', 'ticket_data', function($scope, ticket_data) {
  $scope.tickets = ticket_data.all();
}]);
