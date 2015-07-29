app.controller('LoginCtrl', function($scope, $state, OAuth) {
  $scope.data = {}
  $scope.login = function() {
    // OAuth.loginUser($scope.data.phone, $scope.data.password).success(function(data) {
    //   $state.go('account');
    // }).error(function(data) {
    //   console.log('Logged in!');
    // });
    var ref = new Firebase("https://piertruckerapp.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }
});
