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

    // window.plugin.notification.local.add({
    //   id: "1234", // A unique id of the notifiction
    //   title: "Victory", // The title of the message
    //   message: "It Works!", // The message that is displayed
    //   date: _5SecondsFromNow // This expects a date object
    // });

    $cordovaLocalNotification.schedule({
      id: 22,
      title: 'test',
      text: 'works!',
      at: _5SecondsFromNow
    }).then(function() {
      var alertPopup = $ionicPopup.alert({
        title: "Alert has been Set",
        template: "Thanks!"
      });
      alertPopup.then(function(res) {});
    });

  }

  // window.plugin.notification.local.onadd = function(id, state, json) {
  //   var alertPopup = $ionicPopup.alert({
  //       title: "Alert has been Set",
  //       template: "Thanks!"
  //     });
  // };

  $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
    alert("Added a notification");
  });

}]);
