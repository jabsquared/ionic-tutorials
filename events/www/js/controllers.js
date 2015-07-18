app.controller('EventsCtrl', ['$scope', '$cordovaLocalNotification', '$ionicPlatform', '$ionicPopup', 'event_data', function($scope, $cordovaLocalNotification, $ionicPlatform, $ionicPopup, event_data) {
  console.log("in controller");
  $scope.events = event_data;
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true

  $ionicPlatform.ready(function() {
    //Local Notification Shit
    $scope.add = function() {
      console.log("entered add function");
      // create var for current time
      var now = new Date().getTime();
      var _5SecondsFromNow = new Date(now + 5 * 1000)
      // trigger notification 1 minute after activated
      alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
      // create notification
      $cordovaLocalNotification.schedule({
        id: 1234,
        // set execution time
        message: "Bogdan is a boss",
        title: "bow down peseant",
        text: 'TESTEST',
        at: _5SecondsFromNow;
        autoCancel: true,
        sound: null
      }).then(function() {
        console.log("The notification has been set");
      });

      // An alert dialog
      (function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Alert has been set!',
          template: 'Thank you!'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
      })();

    }

    $scope.$on("$cordovaLocalNotification:added", function(id, state, json) {
      alert("Added a notification");
    });

  });

}]);
