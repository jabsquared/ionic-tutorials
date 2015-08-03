app.controller("LoginCtrl", function($scope, $state, userData) {
  //Feilds
  $scope.data = {};

  //Temporary User data
  $scope.data.name = "Bogdan Pshonyak";
  $scope.data.uid = "jfft54rT#$RQWFg5";

  //Functions
  $scope.login = function() {
    userData.setUser($scope.data);
    $state.go('account');
  }
  $scope.fbLogin = function() {
    // login user with facebook account
  }
  $scope.signup = function() {
    $state.go('signup');
  }
});

app.controller("SignupCtrl", function($scope, $state) {
  //Feilds
  $scope.data = {};

  //Functions
  $scope.cancel = function() {
    $state.go('login');
  }
  $scope.signup = function() {
    // signup user
  }
});

app.controller("AccountCtrl", function($scope, $state, userData) {

  //Feilds
  $scope.user = userData.getUser();
  $scope.drop = false;
  $scope.drop2 = false;

  //Functions
  $scope.toggle = function(num) {
    if (num === 1) {
      $scope.drop = !$scope.drop;
    } else if (num === 2) {
      $scope.drop2 = !$scope.drop2;
    }

    $scope.schedule = function() {
      $state.go('schedule');
    }

    $scope.logout = function() {
      $state.go('login');
    }

  }
});

app.controller("ScheduleCtrl", function($scope, $state, $ionicPopup, PouchDBListener) {

  //Feilds
  $scope.appointments = [];
  $scope.schedule_info = {};
  $scope.schedule_info.alarm = false;

  //Functions
  $scope.submitData = function() {
    if ($scope.hasOwnProperty("appointments") !== true) {
      $scope.appointments = [];
    }
    localDB.post({
      user_id: '23554231512341',
      barber:  $scope.schedule_info.barber,
      time: $scope.schedule_info.date.toString(),
      alarm: $scope.schedule_info.alarm,
      done: false,
    });
  }

  $scope.logout = function() {
    $state.go('login');
  }

  //Event Listeners
  $scope.$on('add', function(event, apt) {
    $scope.appointments.push(apt);
  });

  $scope.$on('delete', function(event, id) {
    for (var i = 0; i < $scope.appointments.length; i++) {
      if ($scope.appointments[i]._id === id) {
        $scope.appointments.splice(i, 1);
      }
    }
  });
});
