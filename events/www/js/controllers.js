app.controller('EventsCtrl', ['$scope', '$cordovaLocalNotification', '$ionicPlatform', '$ionicPopup', 'event_data', function($scope, $cordovaLocalNotification, $ionicPlatform, $ionicPopup, event_data) {
  console.log("in controller");

  $scope.events = event_data;
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true;

  //Local Notification Shit

  $scope.add = function() {
    console.log("entered add function");
    // create var for current time
    var now = new Date().getTime();
    var _5SecondsFromNow = new Date(now + 5 * 1000);
    // trigger notification 1 minute after activated
    // alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
    // create notification

    $cordovaLocalNotification.schedule({
    id: 1,
    title: 'Event About to Start!',
      text: 'Louis is speaking in 15 minutes.',
      at: _5SecondsFromNow,
      icon: 'file://img/logo.png',
      smallIcon: 'file://img/logo.png',
      led: 'FBA50A',
      badge: 1
    }).then(function() {
    var alertPopup = $ionicPopup.alert({
      title: "Alert has been Set",
      template: "Thanks!"
    });
      alertPopup.then(function(res) {});
    });
}

$scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
alert("Added a notification");
});

}]);
