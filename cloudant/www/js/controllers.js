
var db = new PouchDB('https://7e95ca9e-57fc-4d13-9202-bf4c5dff28f5-bluemix.cloudant.com/barberqueues', {
  auth: {
    username: '',
    password: ''
});
  }

var local = new PouchDB('local_db');
local.sync(db, {
  live: true,
  retry: true
}).on('error', console.log.bind(console));

app.controller('LoginCtrl', function($scope, $state, $rootScope, userData) {
  $scope.user = {};

  $scope.login = function() {

    $rootScope.dataClient.login($scope.user.email, $scope.user.password, function(error, response) {
      if (error) {
        //error — could not log user in
        console.log('Could not login.');
        console.log(error);
      } else {
        //success — user has been logged in
        var token = $rootScope.dataClient.token;
        console.log(response);
        $scope.user.uid = $rootScope.dataClient.token;
        userData.setUser($scope.user);
        $state.go('account');
      }
    });
  }

  $scope.signup = function() {
    $state.go('signup');
  }

})

app.controller('AccountCtrl', function($scope, $state, userData) {
  $scope.user = userData.getUser();
  $scope.drop = false;
  $scope.drop2 = false;

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
})

app.controller('SignupCtrl', function($scope, $state, $rootScope) {

  $scope.user = {};

  // Check for User's name and username

  $scope.signup = function() {

    db.signup($scope.user.email, $scope.user.password, {
      metadata: {
        fullname: $scope.user.name,
      }
    }, function(err, response) {
      if (err) {
        if (err.name === 'conflict') {
          // "batman" already exists, choose another username
        } else if (err.name === 'forbidden') {
          // invalid username
        } else {
          console.log(err);
          // HTTP error, cosmic rays, etc.
        }
      } else {
        $scope.cancel();
      }
    });
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
    mondayIsFirstDay: true, //set monday as first day of week. Default is false
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

  $scope.events = [{
    foo: 'bar',
    date: new Date(2015, 11, 3)
  }, {
    foo: 'bar',
    date: new Date(2015, 6, 4)
  }];
});
