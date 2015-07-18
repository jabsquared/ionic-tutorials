angular.module('starter.controllers', [])

// login page controller
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};

  $scope.login = function() {
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
      $state.go('geolocation');
    }).error(function(data) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  }
})

// geolocation controller
.controller('GeoCtrl', function($scope, $ionicPopup) {
  $scope.lon = "";
  $scope.lat = "";

  // onSuccess Callback
  // This method accepts a Position object, which contains the
  // current GPS coordinates
  //
  var onSuccess = function(position) {
    $scope.lon = position.coords.longitude;
    $scope.lat = position.coords.latitude;
    $ionicPopup.alert({title : 'Success!', template : 'Your location has been recorded.'});
    // $ionicPopup.alert({ title : 'Location Info', template : 'Latitude: ' + position.coords.latitude + '\n' +
    //   'Longitude: ' + position.coords.longitude + '\n' +
    //   'Altitude: ' + position.coords.altitude + '\n' +
    //   'Accuracy: ' + position.coords.accuracy + '\n' +
    //   'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    //   'Heading: ' + position.coords.heading + '\n' +
    //   'Speed: ' + position.coords.speed + '\n' +
    //   'Timestamp: ' + position.timestamp + '\n'});
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
    alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  }

  var options = { enableHighAccuracy: true };

  $scope.GetLocation = function() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
