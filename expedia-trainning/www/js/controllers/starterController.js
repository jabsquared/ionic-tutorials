angular.module('starter')
  .controller('HelloCtrl', ['$scope', function($scope) {
    $scope.name="World!"

    $scope.input;

    $scope.submit = function(){
      if($scope.input == null){
        return;
      } else {
        $scope.name=$scope.input;
      }
    }
  }])
