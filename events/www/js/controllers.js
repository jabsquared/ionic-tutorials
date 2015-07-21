app.controller('EventsCtrl', ['$scope', '$cordovaLocalNotification', '$ionicPlatform', '$ionicPopup', 'event_data', function($scope, $cordovaLocalNotification, $ionicPlatform, $ionicPopup, event_data) {
  console.log("in controller");

  $scope.events = event_data;
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true;

  //Local Notification Shit

  $scope.schedule = function(id, date_obj) {
    console.log("date passed in: ");
    console.log(date_obj);
    // prompt user for reminder options
    var alarmPopup = $ionicPopup.show({
      title: "Set Reminder",
      // template: "",
      buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: '2 min',
        type: 'button-calm',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(2, id, date_obj);
          return 10;
        }
      }, {
        text: '5 min',
        type: 'button-positive',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(5, id, date_obj);
          return 15;
        }
      }, {
        text: '30 min',
        type: 'button-royal',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          // add(15, id);
          console.log(id);
          return 30;
        }
      }]
    });
    console.log("alarmPopup:");
    console.log(alarmPopup);
  }

  function add(minutes, id, date_obj) {
    console.log("entered add function");

    // create var for current time
    // var now = new Date().getTime();
    // var _5SecondsFromNow = new Date(now + sec * 1000);

    var newDate = subtractMinutes(date_obj, minutes);

    function subtractMinutes(date_obj, minutes) {
      // converts date string back into date object
      var newobj = new Date(date_obj).getTime();
      return new Date(newobj - minutes * 60000);
    }

    $cordovaLocalNotification.schedule({
      id: id,
      title: 'Event About to Start!',
      text: 'Louis is speaking in 15 minutes.',
      at: newDate,
      sound: null,
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
