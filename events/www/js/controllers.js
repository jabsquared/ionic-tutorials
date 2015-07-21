app.controller('EventsCtrl', ['$scope', '$cordovaLocalNotification', '$ionicPlatform', '$ionicPopup', 'event_data', function($scope, $cordovaLocalNotification, $ionicPlatform, $ionicPopup, event_data) {
  console.log("in controller");

  $scope.events = event_data;
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true;

  $scope.foo = 0;

  //Local Notification Shit

  $scope.test = function() {
    // prompt user for reminder options
    var alarmPopup = $ionicPopup.show({
      title: "Set Reminder",
      // template: "",
      buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: '10 min',
        type: 'button-default',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(5);
          return 10;
        }
      }, {
        text: '15 min',
        type: 'button-positive',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(10);
          return 15;
        }
      }, {
        text: '30 min',
        type: 'button-positive',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          return 30;
        }
      }]
    });
    console.log("alarmPopup:");
    console.log(alarmPopup);
  }

  console.log("foo:");
  console.log($scope.foo);

  function add(sec) {
    console.log("entered add function");

    // create var for current time
    var now = new Date().getTime();
    var _5SecondsFromNow = new Date(now + sec * 1000);

    $cordovaLocalNotification.schedule({
      id: 1,
      title: 'Event About to Start!',
      text: 'Louis is speaking in 15 minutes.',
      at: _5SecondsFromNow,
      icon: 'file://img/logo.png',
      smallIcon: 'file://img/small.png',
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
