app.controller('LoginCtrl', function($scope, $state) {
  $scope.data = {}

  $scope.fbLogin = function() {

  }

  $scope.login = function() {
    $state.go('account');
  }

  $scope.signup = function() {
    $state.go('signup');
  }


})

app.controller('AccountCtrl', function($scope, $state, fbUserData) {
  $scope.user = fbUserData.getUser();
  $scope.data = {};
  $scope.drop = false;
  $scope.drop2 = false;

  $scope.toggle = function(num){
    if (num === 1) {
      $scope.drop = !$scope.drop;
    } else if (num === 2){
      $scope.drop2 = !$scope.drop2;
    }


  }
})

app.controller('SignupCtrl', function($scope, $state) {

  $scope.signup = function() {

  }

  $scope.cancel = function() {
    $state.go('login');
  }

});
