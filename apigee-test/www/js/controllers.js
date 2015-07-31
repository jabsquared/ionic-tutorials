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

  $scope.schedule = function() {
    $state.go('schedule');
  }

  }
})

app.controller('SignupCtrl', function($scope, $state) {

  $scope.signup = function() {

  }

  $scope.cancel = function() {
    $state.go('login');
  }

})

app.controller('ScheduleCtrl', function($scope, $state) {
  $scope.options = {
    defaultDate: new Date(2015, 06, 26),
    minDate: new Date(2015, 06, 12),
    maxDate: new Date(2015, 12, 31),
    disabledDates: [
      new Date(2015, 06, 30),
      new Date(2015, 07, 25),
      new Date(2015, 08, 13),
    ],
    dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
    mondayIsFirstDay: true,//set monday as first day of week. Default is false
    eventClick: function(date) {
      console.log(date);
    },
    dateClick: function(date) {
      console.log(date);
    },
    changeMonth: function(month, year) {
      console.log(month, year);
    },
  };

  $scope.events = [
    {foo: 'bar', date: new Date(2015, 11, 3)},
    {foo: 'bar', date: new Date(2015, 6, 4)}
  ];
});
