app.controller('EventsCtrl', ['$scope', '$cordovaLocalNotification', '$ionicPlatform', '$ionicPopup', 'event_data', function($scope, $cordovaLocalNotification, $ionicPlatform, $ionicPopup, event_data) {
  console.log("in controller");

  $scope.events = event_data.all();
  $scope.shouldShowDelete = false;
  $scope.listCanSwipe = true;

  //Local Notification Shit

  $scope.schedule = function(single_event) {
    // convert date string back into date object
    // date_obj = new Date(date_obj);
    // prompt user for reminder options
    var alarmPopup = $ionicPopup.show({
      title: "Set Reminder",
      // template: "",
      cssClass: 'oneline',
      buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: '5 minutes',
        type: 'button-calm',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(5, single_event);
          return 10;
        }
      }, {
        text: '10 minutes',
        type: 'button-positive',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(10, single_event);
          return 15;
        }
      }, {
        text: '15 minutes',
        type: 'button-royal',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          add(15, single_event);
          return 30;
        }
      }, {
        text: 'Cancel',
        type: 'button-assertive',
        cssClass: 'oneline',
        onTap: function(e) {
          // Returning a value will cause the promise to resolve with the given value.
          return;
        }
      }]
    });
    console.log("alarmPopup:");
    console.log(alarmPopup);
  }

  function add(minutes, single_event) {
    console.log("entered add function");

    // create var for current time
    // var now = new Date().getTime();
    // var _5SecondsFromNow = new Date(now + sec * 1000);

    var newDate = subtractMinutes(single_event.start, minutes);

    function subtractMinutes(date_obj, minutes) {
      date_obj = new Date(date_obj);
      return new Date(date_obj.getTime() - minutes * 60000);
    }

    $cordovaLocalNotification.schedule({
      id: single_event.id,
      title: 'Event Reminder',
      text: single_event.name + ' starts in ' + minutes + ' minutes.',
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

}])

app.controller('EventCtrl', ['$scope', '$stateParams', 'event_data', function($scope, $stateParams, event_data) {
  $scope.event = event_data.get($stateParams.id);
}]);
