app.controller('LoginCtrl', function($scope, $state) {
  $scope.data = {}

  $scope.fbLogin = function() {

  }

  $scope.login = function() {

  }

  $scope.signup = function() {
    $state.go('signup');
  }


})

app.controller('AccountCtrl', function($scope, $state, fbUserData) {
  $scope.user = fbUserData.getUser();

})

app.controller('SignupCtrl', function($scope, $state) {
  $scope.data = {};

  $scope.signup = function() {

  }

  $scope.cancel = function() {
    $state.go('login');
  }

});
