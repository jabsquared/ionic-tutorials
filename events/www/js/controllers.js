app.controller('EventsCtrl', ['$scope', 'event_data', function($scope, event_data,  $cordovaLocalNotification){
  console.log("in controller");
  $scope.events = event_data;
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true

  //Local Notification Shit
  $scope.add = function() {
        // create var for current time
        var alarmTime = new Date();
        // trigger notification 1 minute after activated
        alarmTime.setMinutes(alarmTime.getMinutes() + 1);
        // create notification
        $cordovaLocalNotification.add({
            id: "1234",
            date: alarmTime,
            message: "This is a message",
            title: "This is a title",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        });
    };
}]);
