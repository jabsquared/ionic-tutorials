// All of the apps controllers are located here.

app.controller('TicketsCtrl', ['$scope', 'ticket_data', function($scope, ticket_data) {
  $scope.tickets = ticket_data.all();



  $scope.color_stat = function (ticket){
    if (ticket.status === 'Pending') {
      return '#AFC4C5';
    } else if (ticket.status === 'Complete') {
      return '#00FF99';
    } else if (ticket.status === 'In Progress'){
      return '#FFFF66';
    } else {
      return 'red';
    }
  }

}]);
